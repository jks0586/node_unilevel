const express = require("express");
const router = express.Router();
const PostsController = require("./controller/Posts");
const AuthController = require("./controller/Auth");
const User = require("./model/User");

router.get("/", (req, res) => {
  res.send("heloo world");
});

router.post("/signup", AuthController.signup);
router.post("/posts/create", PostsController.createPost);
router.post("/signin", AuthController.signin);
router.get('/posts',PostsController.getPost);
router.put('/posts/:id',PostsController.updatePost);
router.delete('/posts/:id',PostsController.deletePost);

module.exports = router;
