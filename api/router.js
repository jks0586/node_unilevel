const express = require("express");
const router = express.Router();
const PostsController = require("./controller/Posts");
const AuthController = require("./controller/Auth");
const ProductController = require("./controller/Product/productControll");
const User = require("./model/User");
const multer = require("multer");
const path = require("path");
const upload = multer({ dest: 'uploads/' })
const auth = require("./controller/Auth")  

router.get("/", (req, res) => {
  res.send("heloo world");
});


// user
router.post("/signup", AuthController.signup);
router.post("/signin", AuthController.signin);


// Posts routes
router.post("/posts/create", PostsController.createPost);
router.get('/posts',PostsController.getPost);
router.put('/posts/:id',PostsController.updatePost);
router.get('/posts/:id',PostsController.findSinglePost);
router.delete('/posts/:id',PostsController.deletePost);



//Products Use
router.post("/add-product", ProductController.add_product);



// const storage = multer.diskStorage({
//    destination:function(req, file, cb){
//    cb(null,path.join(__dirname,'../public/ProductImages'), function(err,success){
//    if(err){
//    throw err
//    }
//    });
// },

//    filename:function(req,file,cb){
//     const name = Date.now()+'-'+file.originalname;
//     cb(null,name,function(error,success){
//       if(error)
//       {
//         throw error
//       }

//     });

 // }
//});










module.exports = router;
