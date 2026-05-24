import express from 'express'
import productRoute from './routes/productRoutes.js';
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use("/api/v1", productRoute)

export default app;
