import express from "express";
import {registerUserController, loginUserController, getInfo} from "../controllers/auth.controller.js";

const authRouter = express.Router(); 
/**
 * POST - /api/auth/register
 */
authRouter.post("/register", registerUserController);

/**
 * GET - /api/auth/get-me
*/
authRouter.get("/get-me", getInfo);

/**
 * POST - /api/auth/login
 */
authRouter.post("/login", loginUserController);


export default authRouter;