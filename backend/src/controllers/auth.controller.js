const userModel = require("../models/user.schema")
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
async function registerUser(req, res) {
    const {username, email, password} = req.body;

    const isEmaiExist = await userModel.findOne({email})
    if(isEmaiExist){
        res.status(406).json({
            message : "Error !!!!!!!!!!!!!! Email already registered."
        })
    }
    const user = await userModel.create({
        username, email, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET) 

    res.cookie("token", token)

    res.status(201).json({
        message: "User registerd successfully",
        user
    })
}
module.exports = {registerUser};