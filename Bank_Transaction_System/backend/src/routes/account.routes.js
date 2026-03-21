const express = require("express")
const route = express.Router();
const accountController = require("../controllers/accoutn.controller")
const authMiddleware = require("../middlewares/auth.middleware") 

/**
 * -POST /api/accounts/
 * -Create a new account.
 * -Protected Route.
 */

route.post("/",authMiddleware.authMiddleware, accountController.createAccountController)

module.exports = route