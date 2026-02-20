const { config } = require("dotenv");
const express = require("express");
const app  = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const authRoutes = require('./routes/auth.routes')

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000

app.use('/auth', authRoutes)

app.get('/', (req, res)=>{
    res.send("Hey from server")
})


app.listen(3000, ()=>{
    console.log("App is listening on PORT");
})




