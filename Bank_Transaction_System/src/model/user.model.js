const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    name : {
        type : String,
        require :[true, "Name is required for creatin an account"],
    },
    password : {
        type : String,
        required : [true, "Password is required for creating an acoount"],
        minlength : [6, "password should contain than 6 character"],
        select : false
    }
}, {
    timestamps : true
})

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    console.log("🔥 Pre-save hook running");

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

//it will compare the passowrd true of false.
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
    
}

module.exports = mongoose.model("User", userSchema);