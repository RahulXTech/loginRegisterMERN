const mongoose = require("mongoose")


async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB connected successfully.")
    })
    .catch((err)=>{
        console.log("Monngo connection error :", err)
        process.exit(1)
    })
}
module.exports = connectDB