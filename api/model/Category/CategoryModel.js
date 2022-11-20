var mongoose = require("mongoose");

//create  Schema
var categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quality: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
