const Posts = require("../model/Posts");

exports.createPost = async (req, res) => {
  const post = new Posts({
    title: req.body.title,
    description: req.body.description,
   firstName:req.body.firstName,
   city:req.body.city,
  });

  try {
    const postsave = await post.save();
    res.json(postsave);
  } catch (error) {
    console.log(error);
  }
};

//Getting all posts
exports.getPost = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (error) {
    res.send("Error", error);
  }
};

//Getting a single posts by id

exports.findSinglePost = async (req, res) => {
  try {
    const posts = await Posts.findById(req.params.id);
    res.json(posts);
  } catch (error) {
    res.send("Error", error);
  }
};

//Update All posts
exports.updatePost = async (req, res) => {
  // console.log(req.param.id);
  const filter = { _id: req.params.id };
  const postsUpdate = await Posts.findOneAndUpdate(filter, req.body, {
    new: true,
  });
  res.json(postsUpdate);
};

//Delete Posts
exports.deletePost = async (req, res) => {
  try {
    const postsdelete = await Posts.findByIdAndRemove(req.params.id);
    res.json(postsdelete);
  } catch (error) {
    res.send("Error", error);
  }
};
