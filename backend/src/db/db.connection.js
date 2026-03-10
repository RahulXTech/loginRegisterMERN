const mongoose = require("mongoose");

async function db_connect(){
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("DB connected successfully.");
    }catch(err){
        console.log("DB connection error message:", err);
    }
}

module.exports = db_connect;