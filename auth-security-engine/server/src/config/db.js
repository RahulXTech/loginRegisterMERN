import mongoose from "mongoose"
import config from "./config.js"
 
async function connectDB(){
    await mongoose.connect(config.MONGO_URI)
    .then(()=>{
        console.log("DB connected successfully.")
    })
    .catch((err)=>{
        console.log("DB connectoin error", err.message) 
        return
    })
}
export default connectDB;