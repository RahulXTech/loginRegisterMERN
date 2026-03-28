const express = require("express")
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config()
const cors = require("cors")
const connectDB = require("./config/db.connect")
const userRoutes = require("./routes/user.routes");
const uploadNotesRoute = require("./routes/upload.routes")
app.use(cookieParser());
app.use(express.json())

app.use(cors({
  origin: "http://localhost:5173", //  your frontend
  credentials: true                //  allow cookies
}))

app.use("/api/auth", userRoutes)
app.use("/api/notes", uploadNotesRoute)



module.exports = app;
