const express = require("express")
const router = express.Router();
const authController = require("../controllers/auth.controller")

router.post("/register", authController.userRegisterContoller)
router.post("/login", authController.userLoginController)

module.exports = router;