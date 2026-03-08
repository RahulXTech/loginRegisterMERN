const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    image : String,
    title : String
})

module.exports = mongoose.model("posts", postSchema);