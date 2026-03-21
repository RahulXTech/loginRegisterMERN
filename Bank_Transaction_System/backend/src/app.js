const express = require("express")
const app = express();
require("dotenv").config()
const connectDB = require("../src/config/db")
connectDB()
const cookiesParser = require("cookie-parser")

/**
 * -Routes required
 */
const authRouter = require("../src/routes/auth.routes")
const accoutRoute = require("./routes/account.routes")

app.use(express.json())
app.use(cookiesParser())
app.use("/api/auth",authRouter)
app.use("/auth/accounts",accoutRoute)
 


module.exports = app;




