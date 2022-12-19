const Category = require("../../model/Category/CategoryModel");
const express = require("express");
const multer = require("multer");
const path = require("path");
require("dotenv").config(); 
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage: storage });

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

const addCategory = async (req, res, next) => {
 console.log(req.file.filename);
  try {
    req.body.image = req.file.filename;

    var category = new Category({
      name: req.body.name,
      slug: req.body.slug,
      status: req.body.status,
      description: req.body.description,
      image: req.file.filename,
    });
 
    const category_data = await category.save();
    category_data.image=process.env.API_URL+category_data.image;
    res
      .status(200)
      .send({ success: true, msg: "Category Details", data: category_data });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

//for Slug

// const getStaticProps = function (context) {
//   return {
//     props: { message: " part 2" },
//   };
// }

// const  getStaticPaths = function () {
//   const categories = ["category/a", "category/b"];
//   const paths = categories.map((category) => ({
//     params: { slug: category },
//   }));

//   return { paths, fallback: false };
// }

//Getting all category
const getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    categories.map((value,index)=>{
    return value.image=process.env.API_URL+value.image;
    })
 
    res.json(categories);
  } catch (error) {
    res.send("Error", error);
  }
};


//Getting a single Category by id
const findSingleCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    category.image=process.env.API_URL+category.image;
    res.json(category);
  } catch (error) {
    res.send("Error", error);
  }
};


//Update All category
const updateCategory = async (req, res) => {
const filter = { _id: req.params.id };
const categoryUpdate = await Category.findOneAndUpdate(filter, req.body, {
new: true,
});
categoryUpdate.image=process.env.API_URL+categoryUpdate.image;
 res.json(categoryUpdate);
};


//Delete Category
const deleteCategory = async (req, res) => {
  try {
    const categorydelete = await Category.findByIdAndRemove(req.params.id);
    res.json(categorydelete);
  } catch (error) {
    res.send("Error", error);
  }
};





module.exports = {
  addCategory,
  // uploadImg,
  getCategory,
  findSingleCategory,
  updateCategory,
  deleteCategory,
  //add_image,
};
