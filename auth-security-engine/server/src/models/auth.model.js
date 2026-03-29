import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    user: {
        type : String,
        required : [true, "User name is required"],
        unique : [true, "User name should be must unique"]
    },
    email:  {
        type : String,
        required : [true, "Email is required"],
        unique : [true, "Email should be must unique"]
    },
    password:  {
        type : String,
        required : [true, "User name is required"]
    }
},{ timestamps: true });

const User = mongoose.model("User", registerSchema);

export default User;

