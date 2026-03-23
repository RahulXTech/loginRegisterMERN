const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    college : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        enum : ["student", "teacher"],
        default : "student"
    }
},{timestamps : true})

//hash password befor saving
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return
    }

    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        
    }catch(error){
        next(error);
    }
})

//Method to compare password during login
userSchema.methods.comparePassword = async function(condidatePassword){
    return await bcrypt.compare(condidatePassword, this.password);
}

module.exports = mongoose.model("Users", userSchema);