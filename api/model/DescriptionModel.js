const mongoose=require("mongoose");

const DescriptionSchema=mongoose.Schema({
    image: {
        type: Array,
        required: true,
      },


});



module.exports=mongoose.model("Description",DescriptionSchema);