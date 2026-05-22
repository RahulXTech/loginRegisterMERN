import express from 'express'
import {processPayment} from './controller/productController.js';
const app = express();

app.use(express.json())
app.use("/api/v1", processPayment)



export default app;




