var mongoose = require("mongoose");

//create  Schema
var cartSchema = mongoose.Schema({
    
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },

  quantity: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
 
});

module.exports = mongoose.model("Cart", cartSchema);
