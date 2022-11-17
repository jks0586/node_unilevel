const mongoose=require("mongoose");

const PostSchema=mongoose.Schema({
    title:{
        type:"string",
        required:true
    },
    description:{
        type:"String",
        required:true
    },
    firstName:{
        type:"String",
        required:true
    },
    city:{
        type:"String",
        required:true
        
    }
    


});



module.exports=mongoose.model("Posts",PostSchema);