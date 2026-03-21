const userModel = require("../model/user.model")
const jwt = require('jsonwebtoken')
const emailService = require("../services/email.service")

/**
 * - user register controller
 * - POST /api/auth/register
 **/

async function userRegisterContoller(req, res){
    const {email, password, name} = req.body;

    const isExist = await userModel.findOne({email})

    if(isExist){
        return res.status(422).json({
            message : "User already exist with email.",
            status : "failed"
    })
    }
    const user = await userModel.create({
        email, password, name
    })
const token = jwt.sign({
        userId : user._id
    }, process.env.JWT_SECRET, {expiresIn : '24h'})

    res.cookie("token", token)

    res.status(201).json({
        message : "User registred successfully.",
        user :{
            _id: user._id,
            email : user.email,
            name : user.name
        },
        token
    })
    await emailService.sendRegistrationEmail(user.email, user.name);
}

/**
 * - user login controller
 * - POST /api/auth/register
 */
async function userLoginController(req, res){
    const {email, password} = req.body;
    
    if(!email || !password) return res.status(400).json({message : "All field are required."});

    const user = await userModel.findOne({email}).select("+password")
    if(!user) return res.status(401).json({message : "Email or password is INVALID1"});

    const isValidPassword = await user.comparePassword(password);
    
    console.log("Password match: ", isValidPassword)
    if (!isValidPassword) {
    return res.status(401).json({
        message: "Email or password is INVALID"
        });
    }

    const token = jwt.sign({
        userId: user._id   
        }, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.cookie("token", token);

res.status(200).json({
    message : "Login successfully.",
    user: {
        _id : user._id,
        name : user.name,
        email : user.email
    }
})
}  
module.exports = {userRegisterContoller, userLoginController}