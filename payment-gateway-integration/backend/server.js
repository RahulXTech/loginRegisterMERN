import app from './app.js'
import dotenv from "dotenv"
import Razorpay from 'razorpay'
dotenv.config({ path: "./config/config.env" });

export const instance = new Razorpay({
  key_id: process.env.TEST_API_KEY,
  key_secret: process.env.TEST_KEY_SECRET
});



app.listen(process.env.PORT, ()=>{
    console.log('Server started at PORT 8000')
})



