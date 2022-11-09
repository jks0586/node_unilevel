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

module.exports = router;
