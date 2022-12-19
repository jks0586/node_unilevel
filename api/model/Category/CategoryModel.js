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
  slug: {
    type: String,
    
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
  // token:{type:String},
});

module.exports = mongoose.model("Category", categorySchema);
