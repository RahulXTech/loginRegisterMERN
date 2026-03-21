const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    _id : String,
    image : String,
    title : String
})

module.exports = mongoose.model("posts", postSchema);