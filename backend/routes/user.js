const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const AuthMiddleware = require("../middlewares/auth.middleware.js");

router.get("/" , async (req,res) => {
  res.send("Hello");

})

router.get("/isAuthorized", AuthMiddleware, (req, res) => {
  if (req.user) {
    return res.status(200).json({ message: "Yes" });
  }
  return res.status(401).json({ message: "No" });
});


router.post("/register", async (req, res) => {
    
  
  try {

    
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(203).json({ message: "User already registered" });
    }

    

    const hashedPassword = await bcrypt.hash(password, 10);
   

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during user registration: ", error);
    res.status(404).json({ message: "Internal Server Error" });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(201).json({ message: "User not found." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(202).json({ message: "Password is incorrect." });
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "1d" });
    return res.status(200).json({ message: "Login successful!", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error." });
  }
});


router.get("/user", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from 'Bearer <token>'

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


router.post("/logout", (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
    
  return res.status(200).json({ message: "Logout Successfully" });
});



  router.get("/check-cookie", (req, res) => {
    console.log("Cookies: ", req.cookies);
    res.json({ cookies: req.cookies });
  });


module.exports = router;