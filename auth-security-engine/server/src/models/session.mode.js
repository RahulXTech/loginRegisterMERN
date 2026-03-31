import mongoose from "mongoose";
import { use } from "react";


const sessionSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.type.ObjectId,
        ref : "users",
        required : [true, "User is required"]
    },
    refreshTokenHash : {
        type : String,
        required : [true, "Refresh token hash is required"]
    },
    userAgent : {
        type : String,
        required : [true, "user agent is required"]
    },
    revoked : {
        type : Boolean,
        default : false
    }
},{
    timestamps : true
})


module.exports = mongoose.model("sessions", sessionSchema)
