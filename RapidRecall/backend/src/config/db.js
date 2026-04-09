import mongoose from "mongoose"


export const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_DB)
    .then(()=>{
        console.log("DB connected successfully.")
    })
    .catch((err)=>{
        console.log("Connection error.",err)
    })
}

