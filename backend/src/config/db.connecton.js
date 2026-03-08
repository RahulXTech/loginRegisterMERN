const mongoose = require("mongoose")
require("dotenv").config()

const DB_URL = process.env.MONGO_DB_URL

mongoose.connect(DB_URL)
.then(()=>{
    console.log("MongoDB connected successfully.")
})
.catch((err)=>{
    console.log("DB error message :", err.message)
})