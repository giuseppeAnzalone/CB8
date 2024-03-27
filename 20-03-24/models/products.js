const mongoose = require("mongoose");

const prooductsSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    default: "no-title",
  },
  price: {
    type: String,
    require: true,
    default: "no-price",
  },
});

module.exports = mongoose.model("Products", prooductsSchema);
