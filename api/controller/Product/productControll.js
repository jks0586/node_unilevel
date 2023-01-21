const Product = require("../../model/Product/ProductModel");
const Category = require("../../model/Category/CategoryModel");
const express = require("express");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const addProduct = async (req, res, next) => {
  console.log(req.file.filename);
  try {
    req.body.image = req.file.filename;

    var product = new Product({
      name: req.body.name,
      specialprice: req.body.specialprice,
      quality: req.body.quality,
      quantity: req.body.quantity,
      stockquantity: req.body.stockquantity,
      price: req.body.price,
      description: req.body.description,
      image: req.file.filename,
      slug: req.body.slug,
      category: req.body.category,
    });

    const product_data = await product.save();
    product_data.image = process.env.API_URL + product_data.image;
    res
      .status(200)
      .send({ success: true, msg: "Product Details", data: product_data });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

//for single slug
const getSingleProducts = async (req, res) => {
  // console.log(req.params.slug);
  try {
    const product = await Product.findOne({ slug: req.params.slug });

    product.image = process.env.API_URL + product.image;
    res.json(product);
  } catch (error) {
    res.send(["Error", error]);
  }
};

const getProducts = async (req, res) => {
  console.log(req.params.slug);
  try {
    const category = await Category.findOne({ slug: req.params.slug });

    // const Products = await Product.find({ '_id': Product.categories }, { $push: { products: Product._id } });
    // const Products = await Product.find().populate("category");
    const Products = await Product.find({ category: category._id });
    Products.map((value, index) => {
      return (value.image = process.env.API_URL + value.image);
    });

    res.json(Products);
  } catch (error) {
    res.send("Error", error);
  }
};


//Getting all product
const getProduct = async (req, res) => {
  try {
    // console.log(req.body);
    // const Products = await Product.find({ '_id': Product.categories }, { $push: { products: Product._id } });
    const Products = await Product.find({});
    Products.map((value, index) => {
      return (value.image = process.env.API_URL + value.image);
    });

    res.json(Products);
  } catch (error) {
    res.send("Error", error);
  }
};

//Getting a single product by id
const findSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    product.image = process.env.API_URL + product.image;
    res.json(product);
  } catch (error) {
    res.send(["Error", error]);
  }
};

//Update All product
const updateProduct = async (req, res) => {
  const filter = { _id: req.params.id };
  const productUpdate = await Product.findOneAndUpdate(filter, req.body, {
    new: true,
  });
  productUpdate.image = process.env.API_URL + productUpdate.image;
  res.json(productUpdate);
};

//Delete  Product
const deleteProduct = async (req, res) => {
  try {
    const productdelete = await Product.findByIdAndRemove(req.params.id);
    res.json(productdelete);
  } catch (error) {
    res.send("Error", error);
  }
};

module.exports = {
  addProduct,
  getProduct,
  getSingleProducts,
  updateProduct,
  findSingleProduct,
  deleteProduct,
  getProducts,
};
