var mongoose = require("mongoose");

//create  Schema
var roleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("Role", roleSchema);
