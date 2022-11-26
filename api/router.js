const express = require("express");
const router = express.Router();
const PostsController = require("./controller/Posts");
const AuthController = require("./controller/Auth");
const ProductController = require("./controller/Product/productControll");
const CategoryController = require("./controller/Category/categoryController");
const User = require("./model/User");
const multer = require("multer");
const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });


const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})


const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// const upload = multer({ storage: storage });
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})

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
router.post("/add/product",upload.single("image"), ProductController.addProduct);
router.get("/product",ProductController.getProduct);
router.get("/product/:id", ProductController.findSingleProduct);
router.put("/product/:id",upload.single("image"),ProductController.updateProduct);
router.delete("/product/:id",ProductController.deleteProduct);


//Category Use
router.post("/add/category",upload.single("image"),CategoryController.addCategory);
router.get("/category",CategoryController.getCategory);
router.get("/category/:id", CategoryController.findSingleCategory);
router.put("/category/:id",upload.single("image"),CategoryController.updateCategory);
router.delete("/category/:id",CategoryController.deleteCategory);




module.exports = router;
