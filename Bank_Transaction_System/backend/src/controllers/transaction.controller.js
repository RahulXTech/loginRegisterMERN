const transactionModel = require("../model/transaction.model")
const ledgerModel = require("../model/ledger.model")
const accountModel = require("../model/account.model")
const emailService = require("../services/email.service")

/**
 * - Create a new transaction
 * THE 10-STEP TRANSFER FLOW:
    *  1. Validate request
    *  2. Vlidate idempotency key
    *  3. Check account status
    *  4. Driver sender balance from ledger
    *  5. Create transaction (PENDING)
    *  6. Create DEBIT ledger entry
    *  8. Mark transaction COMPLETED
    *  9. Commit MongoDB session
    *  10. Send email notification
 */

async function createTransaction(req, res) {
    const {fromAccount, toAccount, amount, idempotencyKey} = req.body;
    
    /**
     *1. Valid requist cheching.
     */

    if(!fromAccount || !toAccount || !amount || !idempotencyKey){
        return res.status(400).json({
            message : "fromAccou, toAccount, amount, and idempotencyke is require."
        })
    }
    const fromUserAcc = await accountModel.findOne({
        _id : fromAccount,
    })
    const toUserAccount = await accountModel.findOne({
        _id : toAccount,
    })

    if(!fromAccount || !toAccount) 
        return res.status(400).json({
            message : "Invalid fromAccoutn or toAccount"
    })

    /**
     * 2. validate idempotency key
     */

    const isTransactionAlreadyExist = await transactionModel.findOne({
        idempotencyKey : idempotencyKey
    })
    if(isTransactionAlreadyExist){
        if(transactionModel.status === 'COMPLETED'){
            res.status(200).json({
                message : "Transaction already processed",
                transaction : isTransactionAlreadyExist
            })
        }
        if(isTransactionAlreadyExist.status === 'PENDING'){
            return res.status(200).json({
                message : "Transection is steel is pending"
            })
        }
        if(isTransactionAlreadyExist.status === 'FAILED'){
            return res.status(500).json({
                message: "Transaction processin failed previosly, please retry."
            })
        }
        if(isTransactionAlreadyExist.status === 'REVERSED'){
            return res.status(500).json({
                message : "Transaction was reversed, please retry"
            })
        }
    }

    /**
     * 3.Check accoutn STATUS
     */
    if(fromAccount.status !== 'ACTIVE' || toUserAccount.status !=='ACTIVE'){
        return res.status(400).json({
            message : "Both fromAccoutn and toAccount should active for transaction."
        })
    }
    /**
     * 4. Driver sender balance from ledger.
     */
    
}