const express = require("express")
const authController = require("../controllers/auth.controller")
const router = express.Router()
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.schema")


router.post("/register",authController.registerUser)

router.get("/test", (req, res)=>{
    console.log("Cookie :", req.cookies)
    res.json({
        message : "Test round",
        cookies : req.cookies
    })
})

router.post("/create", async(req, res)=>{
    const token = req.cookies.token;
    if(!token){
       return res.status(401).json({
            message : "Unauthorized"
        })
    }

    try{

      const decoded =  jwt.verify(token, process.env.JWT_SECRET)
      console.log(decoded)
      const user = await userModel.findOne({
        _id : decoded.id
      })
      console.log(user);
    }catch(err){
        return res.status(401).json({
            message : "Wrong web token."
        })
    }

    console.log(req.cookies.token);

    
    res.send("Post created successfully.");
})
module.exports = router;