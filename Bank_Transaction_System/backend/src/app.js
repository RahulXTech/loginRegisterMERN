const express = require("express")
const app = express();
require("dotenv").config()
const connectDB = require("../src/config/db")
connectDB()
const authRouter = require("../src/routes/auth.routes")
const cookiesParser = require("cookie-parser")

app.use(express.json())
app.use("/api/auth",authRouter)
app.use(cookiesParser())
 


module.exports = app;




