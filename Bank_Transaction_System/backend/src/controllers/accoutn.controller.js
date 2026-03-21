const accountModel = require("../model/account.model");

async function createAccountController(req, res){

    const user = req.user;
    const accout = await accountModel.create({
        user: user._id
    })
    res.status(201).json({ 
        accout,
        message : "Accoutn created successfully."
    })


}
module.exports = {createAccountController};