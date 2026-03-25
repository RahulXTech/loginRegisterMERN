const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
  subject: String,
  college: String,
  price: Number,
  fileUrl: String,
  previewUrl: String,
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  downloads: { type: Number, default: 0 }
}, { timestamps: true });



module.exports = mongoose.model("Note",noteSchema);