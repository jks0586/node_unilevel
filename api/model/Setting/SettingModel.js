const mongoose=require("mongoose");

const SettingSchema=mongoose.Schema({
    levels:{
        type:"string",
        required:true
    },
    referrals:{
        type:"String",
        required:true
    },
    withdrawallimit:{
        type:"String",
        required:true
    }, 
    shortcodemessage:{
        type:"String",
        required:true
        
    },
    planbasedon:{
        type:"String",
        required:true
        
    }
    


});



module.exports=mongoose.model("Setting",SettingSchema);
