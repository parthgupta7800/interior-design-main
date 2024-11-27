const jwt = require("jsonwebtoken");

const AuthMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded; // Attach user info to the request
    next(); 
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = AuthMiddleware;
