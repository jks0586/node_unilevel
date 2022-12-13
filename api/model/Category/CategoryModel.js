var mongoose = require("mongoose");

//create  Schema
var categorySchema = mongoose.Schema({
  // products: [
  //   { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
  // ],
  name: {
    type: String,
    required: true,
  },
 
  status: {
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

module.exports = mongoose.model("Category", categorySchema);
