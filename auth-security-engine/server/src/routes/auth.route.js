import express from "express";
import {registerUserController, loginUserController} from "../controllers/auth.controller.js";

const router = express.Router();

 
/**
 * POST - /api/auth/register
 */
router.post("/register", registerUserController);
router.post("/login", loginUserController);

export default router;

