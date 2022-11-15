var mongoose = require("mongoose");


//create  Schema
var productSchema = mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    discount:{
        type:String,
        required:true
    },
    quality:{
        type:String,
        required:true
    }
    
    
    

});

module.exports = mongoose.model("Product",productSchema );
