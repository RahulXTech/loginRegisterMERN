const mongoose = require("mongoose")


const transactionSchema = new mongoose.Schema({
    fromAccount: {
        tyep : mongoose.Schema.Types.ObjectId,
        ref : "account",
        required : [true, "Transaction must be associated with a from accoutn"],
        index : true
    },
    toAccount : {
        tyep : mongoose.Schema.Types.ObjectId,
        ref : "account",
        required : [true, "Transaction must be associated with a to accoutn"],
        index : true
    },
    status : {
        tyep : String,
        enum : {
            values : ["PENDING", "COMPLETED", "FAILED","REVERSED"],
            message : "Status can be eaither PENDING, COMPLETED, FAILED and REVERSED"
        },
        default : "PENDING"
    },
    amount : {
        type : Number,
        required : [true, "Amount is required for creating a transaction."],
        min : [0, "Transaction amount cannot be negative"]
    },
    idempotencyKey : {
        type : String,
        required : [true, "Idempotency key is required for creating a transaction"],
        index : true,
        unique : true
    }
},{
        timestamps : true
    })

const transactionModel = mongoose.model("transaction", transactionSchema)
module.exports = transactionModel;