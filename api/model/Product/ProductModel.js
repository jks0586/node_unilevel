var mongoose = require("mongoose");

//create  Schema
var productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  specialprice: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  stockquantity: {
    type: String,
    required: true,
  },
  quality: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
