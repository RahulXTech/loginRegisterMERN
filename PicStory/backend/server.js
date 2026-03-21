const express = require("express")
const mongoose = require("./src/config/db.connecton")
const postSchemas = require("./src/models/post.schema")
const { v4 : uuidv4 } = require("uuid");
const app = express();
require("dotenv").config();
const multer = require("multer")
const cors = require("cors")

const upload = multer({ storage: multer.memoryStorage() })
const uploadFile = require("./src/services/imagekit.services");


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/create-post", upload.single("image"), async (req, res) => {

    const result = await uploadFile(req.file.buffer);

    const posts = await postSchemas.create({
        _id : uuidv4(),
        image: result.url,
        title: req.body.title
    });

    res.json(posts);
});

app.get("/show-post", async (req, res) => {
    try {
        const posts = await postSchemas.find();
        res.json(posts);
    } catch (err) {
        console.log(err);
    }
})

//delete post
app.delete("/delete-post/:_id", async (req, res)=>{
    await postSchemas.findByIdAndDelete(req.params._id);
    console.log("post deleted succefully.")
    res.send("Post deleted success fully.")
})


app.get("/", (req, res) => {
    res.send("I am root route.")
})

app.listen(PORT, () => {
    console.log("Port is listening on :", PORT);
})