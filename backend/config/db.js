const mongoose = require('mongoose')

const connectDB = ()=>{
    try{
        const conne = mongoose.connect(`${ process.env.MONGODB_URL}`)
        console.log("MongoDB connected with Database")

    }catch(err){
        console.log(err.message)
        process.exit(1);

    }
}
module.exports = connectDB;