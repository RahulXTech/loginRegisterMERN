import express from "express";
import {registerUserController, getInfo, refreshToken} from "../controllers/auth.controller.js";

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
 * GET - /api/auth/refresh-token
 */
authRouter.get("/refresh-token", refreshToken);


export default authRouter;
