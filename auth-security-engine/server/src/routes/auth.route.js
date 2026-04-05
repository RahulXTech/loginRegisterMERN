import express from "express";
import {registerUserController,loginController, getInfo, refreshToken,logout,logoutAll, verifyEmailController} from "../controllers/auth.controller.js";

const authRouter = express.Router(); 
/**
 * POST - /api/auth/register
 */
authRouter.post("/register", registerUserController);
/**
 * POST - /api/auth/login
 */
authRouter.post("/login", loginController)
/**
 * GET - /api/auth/get-me
*/
authRouter.get("/get-me", getInfo);
/**
 * GET - /api/auth/refresh-token
 */
authRouter.get("/refresh-token", refreshToken)
/**
 * GET - /api/auth/logout
 */
authRouter.get("/logout",logout)


/**
 * GET - /api/auth/logout-all
 */
authRouter.get("/logout-all", logoutAll)

/**
 * GET - /api/auth/verify-email
 */

authRouter.get("/verify-email", verifyEmailController)
export default authRouter;
