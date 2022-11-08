const Posts=require("../model/Posts");

exports.createPost=async(req,res)=>{
    const post = new Posts({
        title:req.body.title,
        description:req.body.description
    });

    try{
        const postsave=await post.save();
        res.json(postsave);
    }catch(error){
        console.log(error);
    }
}