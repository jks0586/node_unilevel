const Category = require("../../model/Category/CategoryModel");
const express = require("express");
const multer = require("multer");
const path = require("path");
const uploadImg = multer().single("image");

const add_image = async (req, res) => {
  //for image
  // var storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, "uploads");
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, Date.now() + "-" + file.originalname);
  //   },
  //   });
  //   var upload = multer({ storage: storage });
};

const add_category = async (req, res) => {
  try {
    req.body.image = req.file.path;

    var category = new Category({
      name: req.body.name,
      quality: req.body.quality,
      title: req.body.title,
      status: req.body.status,
      description: req.body.description,
      image: req.body.image,
    });

    const category_data = await category.save();
    res
      .status(200)
      .send({ success: true, msg: "Category Details", data: category_data });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

//Getting all category
const get_category = async (req, res) => {
  try {
    const category = await Category.find();
    res.json(category);
  } catch (error) {
    res.send("Error", error);
  }
};
module.exports = {
  add_category,
  uploadImg,
  get_category,
  //add_image,
};
