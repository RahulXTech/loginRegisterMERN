import express from "express"
import cors from "cors"
import "dotenv/config"
import { connectDB } from "./src/config/db.js";

const app = express();
const port = process.env.PORT;


//MIDDLEWARE
app.use(cors()); 
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//DATA BASE
connectDB()


//ROUTES
app.get('/', (req, res)=>{
    res.send('API WORKING')
});

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})




