import express from "express";
import "dotenv/config";

import connectDB from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import morgan from "morgan";
const app = express();

connectDB(); 

app.use(express.json());
app.use(morgan("dev"))
app.use("/api/auth", authRouter);


export default app;
