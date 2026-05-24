import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils.js";
import { instance } from "../server.js";
import crypto from "node:crypto";

export const processPayment = async(req, res)=>{
    const options = {
        amount : Number(req.body.amount*100), //cents
        currency : "INR"
    }
    const order = await instance.orders.create(options);
     res.status(200).json({
        success : true,
        order
    })
}

export const getKey = async (req, res) => {
    res.status(200).json({
        key: process.env.TEST_API_KEY
    });
};

export const paymentVerification = async (req, res)=>{
    const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body;

    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto.createHmac("sha256", process.env.TEST_KEY_SECRET).update(body.toString()).digest("hex");

    const isAuthentic = expectedSignature===razorpay_signature;

    if(isAuthentic){
        return res.redirect(`http://localhost:5173/paymentSuccess?reference=${razorpay_payment_id}`)
    }else{
        return res.status(404).json({
            success : false
        })
    }
    res.status(200).json({
        success : true
    })
}
