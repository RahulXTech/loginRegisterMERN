import express from "express"
import {processPayment, getKey} from "../controller/productController.js"

const route = express.Router();


route.post("/payment/process", processPayment)
route.post("/getKey", getKey);


export default route;