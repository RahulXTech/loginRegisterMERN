const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  note: { type: mongoose.Schema.Types.ObjectId, ref: "Note" },
  amount: Number,
  paymentId: String,
  status: String
});

mongoose.model = mongoose.model("order", orderSchema)