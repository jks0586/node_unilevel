const express = require("express");
const router = express.Router();
const PostsController = require("./controller/Posts");
const AuthController = require("./controller/Auth");
const ProductController = require("./controller/Product/productControll");
const CategoryController = require("./controller/Category/categoryController");
const User = require("./model/User");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
     cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

const auth = require("./controller/Auth");

router.get("/", (req, res) => {
  res.send("heloo world");
});

// user
router.post("/signup", AuthController.signup);
router.post("/signin", AuthController.signin);

// Posts routes
router.post("/posts/create", PostsController.createPost);
router.get("/posts", PostsController.getPost);
router.put("/posts/:id", PostsController.updatePost);
router.get("/posts/:id", PostsController.findSinglePost);
router.delete("/posts/:id", PostsController.deletePost);

//Products Use
router.post("/add-product", ProductController.add_product);
 
//Category Use
 router.post("/add-category", upload.single('image'),CategoryController.add_category);

//  router.post("/image", upload.single('image'),CategoryController.add_image);

module.exports = router;
