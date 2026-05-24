import express from "express"
import {processPayment, getKey, paymentVerification} from "../controller/productController.js"

const route = express.Router();


route.post("/payment/process", processPayment)
route.get("/getKey", getKey);
route.post("/paymentVerification", paymentVerification);

export default route;



