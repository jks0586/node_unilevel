const express = require("express");
const router = express.Router();
const PostsController = require("./controller/Posts");
const AuthController = require("./controller/Auth");
const User = require("./model/User");

router.get("/", (req, res) => {
  res.send("heloo world");
});

// auth user
router.post("/signup", AuthController.signup);
router.post("/signin", AuthController.signin);

// Posts routes
router.post("/posts/create", PostsController.createPost);
router.get('/posts',PostsController.getPost);
router.put('/posts/:id',PostsController.updatePost);
router.delete('/posts/:id',PostsController.deletePost);


// products 

module.exports = router;
