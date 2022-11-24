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
router.post("/add-product", ProductController.add_product);



//Category Use
router.post("/add/category",upload.single("image"),CategoryController.addCategory);
//  router.post("/add/category",upload.single("image"), (req, res ) => {
//  CategoryController.addCategory
//  res.json({

//      image_url: `http://localhost:5000/image/${req.file.filename}`

//   })
// })
router.get("/category",CategoryController.getCategory);
router.get("/category/:id", CategoryController.findSingleCategory);
router.put("/category/:id",upload.single("image"),CategoryController.updateCategory);
router.delete("/category/:id",CategoryController.deleteCategory);
//  router.post("/image", upload.single('image'),CategoryController.add_image);


// router.get("/category",CategoryController.getCategory, (req, res, next) => {
//   Product.find()
//     .select("name category _id categoryImage")
//     .exec()
//     .then(docs => {
//       const response = {
//         count: docs.length,
//         category: docs.map(doc => {
//           return {
//             name: doc.name,
//             quality: doc.quality,
//             Image: doc.Image,
//             description:doc.description,
//             _id: doc._id,
//             request: {
//               type: "GET",
//               url: "http://localhost:5000/category/" + doc._id
//             }
//           };
//         })
//       };
      
//       res.status(200).json(response);
      
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });
module.exports = router;
