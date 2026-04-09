import mongoose from "mongoose";
import User from "../models/userModel";
import validator from "validator"
import jwt from "jsonwebtoken"
//REGISTER
export async function register(req, res){
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                message : "All field are required."
            })
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({
                success : false,
                message : 'Invalid email'
            })
        }
        
        const exist = await User.findOne({email}).lean()
        if(exist) return res.status(409).json({success : false, message : 'User already exists'})

            const newId = new mongoose.Types.ObjectId()
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new User({
                _id : newId,
                name,
                email,
                password : hashedPassword
            });
            await user.save();

            const token = jwt.sign({id : newId.toString()}, process.env.JWT_SECRET)

            return res.status(201).json({
                success : true,
                message : "Account created successfully",
                token,
                user : {
                    id : user._id.toString(),
                    name : user.name,
                    email : user.email
                }
            })
    }catch(error){
        console.log("Register server side error.", error )
        return res.status(500).json({
            success : false,
            message : 'Server error'
        })
    }
}