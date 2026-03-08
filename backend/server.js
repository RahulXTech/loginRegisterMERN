const express = require("express")
const mongoose = require("./src/config/db.connecton")
const postSchemas = require("./src/models/post.schema")
const app = express();
require("dotenv").config();
const multer = require("multer")
const cors = require("cors")

const upload = multer({storage: multer.memoryStorage()})
const BufferimageKit = require("./src/services/imagekit.services")


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/create-post",upload.single("image"), async(req, res)=>{
    const result = await BufferimageKit(req.file.buffer)
    const posts = await postSchemas.create({
        image : result.url,
        title : req.body.title
    })
    res.json(posts)
})

app.get("/show-post", async(req, res)=>{
try{
    const posts = await postSchemas.find();
    res.json(posts);
}catch(err){
    console.log(err);
}
})

app.get("/", (req, res)=>{
    res.send("I am root route.")
})

app.listen(PORT, ()=>{
    console.log("Port is listening on :",PORT);
})
