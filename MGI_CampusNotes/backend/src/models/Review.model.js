const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  note: { type: mongoose.Schema.Types.ObjectId, ref: "Note" },
  rating: Number,
  comment: String
});


module.exports = mongoose.model("review", reviewSchema);