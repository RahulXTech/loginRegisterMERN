const express = require("express")
const route = express.Router();
const {registerUserController, loginUserController} = require("../controllers/authController")

route.post("/register", registerUserController)
route.post("/login", loginUserController)

module.exports = route;