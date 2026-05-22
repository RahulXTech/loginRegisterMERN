import { instance } from "../server.js";

const processPayment = async(req, res)=>{
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
const getKey = async (req, res) => {

    res.status(200).json({
        key: process.env.TEST_API_KEY,
    });

};
export {processPayment, getKey};
