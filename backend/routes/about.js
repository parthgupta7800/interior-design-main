const express = require("express")
const About = require("../models/about.js")
const router = express.Router()


router.post("/aboutForm" , async (req,res) => {
    try{
        const {name , email , subject , message } = req.body;
    if(!name || !email || !subject || !message){
        return res.status(201).json({message :"All Fields Are required!!!"})
    }

    const about = new About({
        name,
        email,
        subject,
        message
    })
    await about.save();
    return res.status(200).json({message : "Your message Send SuccessFully!!!"})
    }
    catch(error){
        res.status(404).json({ message: "Internal Server Error" });

    }
})



module.exports = router;