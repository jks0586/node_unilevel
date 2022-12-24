const express = require("express");
const router = express.Router();
const PostsController = require("./controller/Posts");
const AuthController = require("./controller/Auth");
const AdminController = require("./controller/AdminController");
const ProductController = require("./controller/Product/productControll");
const CategoryController = require("./controller/Category/categoryController");
const RoleController = require("./controller/Role/roleController");
const SettingController = require("./controller/Setting/SettingController")
const User = require("./model/User");
const Admin = require("./model/Admin")
const multer = require("multer");
const path = require("path");
const authenticate= require('./controller/middleware/authenticate')
//const Imageuploadcontroller = require("./controller/middleware/Imageuploadcontroller.js")

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    // console.log(file);
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// const upload = multer({ storage: storage });
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

const auth = require("./controller/Auth");
const { request } = require("http");
router.get("/", (req, res) => {
  res.send("heloo world");
});

// user
router.post("/signup", AuthController.signup);
router.post("/signin", AuthController.signin);

// admin
router.post("/register", AdminController.register);
router.post("/login", AdminController.login);


// Posts routes
router.post("/posts/create", PostsController.createPost);
router.get("/posts", PostsController.getPost);
router.put("/posts/:id", PostsController.updatePost);
router.get("/posts/:id", PostsController.findSinglePost);
router.delete("/posts/:id", PostsController.deletePost);

// //Products Use
// // router.post("/add/product",upload.array('image',9999),ProductController.addProduct);
// //router.post("/posts/create", authenticateToken,PostsController.createPost);
// //router.post("/add/product",upload.single('image'),authenticate,ProductController.addProduct);
// router.post("/add/product",upload.single('image'),authenticate,ProductController.addProduct);
// router.get("/product",authenticate, ProductController.getProduct);
// router.get("/product/:id",authenticate, ProductController.findSingleProduct);
// router.put("/product/:id",upload.single("image"),authenticate,ProductController.updateProduct);
// router.delete("/product/:id",authenticate, ProductController.deleteProduct);

router.post("/add/product",upload.single('image'),ProductController.addProduct);
router.get("/product", ProductController.getProduct);
router.get("/product/:id", ProductController.findSingleProduct);
router.put("/product/:id",upload.single("image"),ProductController.updateProduct);
router.delete("/product/:id", ProductController.deleteProduct);
router.get("/products/:slug", ProductController.getProducts);
router.get("/singleproduct/:slug", ProductController.getSingleProducts);




//Category Use
router.post("/add/category",upload.single("image"), CategoryController.addCategory);
router.get("/category", CategoryController.getCategory);
router.get("/category/:id", CategoryController.findSingleCategory);
router.put("/category/:id",upload.single("image"),CategoryController.updateCategory);
router.delete("/category/:id", CategoryController.deleteCategory);

//Role Use 
router.post("/add/role",upload.single("image"),RoleController.addRole);
router.get("/role", RoleController.getRole);
router.get("/role/:id", RoleController.findSingleRole);
router.put("/role/:id",RoleController.updateRole);
router.delete("/role/:id", RoleController.deleteRole);

// Setting routes
router.post("/setting/create", SettingController.createSetting);
router.post("/setting", SettingController.getSetting);
 
//description image
// router.post("/add/image",upload.single('upload'),Imageuploadcontroller.addImage);
// router.get("/description", Imageuploadcontroller.getDescription);

module.exports = router;
//app.use(upload.array());
