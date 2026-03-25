const userSchema = require("../models/User.model")
const jwt = require("jsonwebtoken")

async function registerUserController(req, res){
try{
    const {name, email, password, college, role}= req.body;

    const isUserExist = await userSchema.findOne({email});
    if(isUserExist){
        return res.status(409).json({message : "Dublicate entry user already exist."})
    }
    await userSchema.create({
        name,email,password,college,role
    })
    res.status(200).json({message : "User registered successfully."})
}catch(error){
    return res.status(500).json({
        message : "Server error :",
    error : error.message
    })
    }
}
async function loginUserController(req, res) {
try{
    const {email, password} = req.body;
    const isUserExist = await userSchema.findOne({email});


    if(!isUserExist) return res.status(401).json({message : "User is not registred"})
    const isMachPassword = await isUserExist.comparePassword(password)


    if(isUserExist && isMachPassword){
         const token = jwt.sign({
        id : isUserExist._id,
        role : isUserExist.role
    },process.env.JWT_SECRET)
    res.cookie("token", token);

        res.status(200).json({
            message : "user login successfully.",
            user : {
                id: isUserExist._id,
                name : isUserExist.name,
                email : isUserExist.email,
                role : isUserExist.role
            }
        });
    }  
}catch(error){
    res.status(500).json({message : "Server error", error : error.message})
}

}
module.exports = {registerUserController, loginUserController}