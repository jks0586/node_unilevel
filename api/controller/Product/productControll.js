const Product = require("../../model/Product/ProductModel");
const express = require("express");
const multer = require("multer");
const path = require("path");

const add_product = async (req, res) => {
  // console.log(req.body);
  try {
    if (req.body.length == 0) {
      // return res.json({ status: "error", error: "Product  is required" });
    }

    var product = new Product({
      //    vendor_id:req.vendor_id,
      name: req.body.name,
      price: req.body.price,
      discount: req.body.discount,
      quality: req.body.quality,
    });

    const product_data = await product.save();
    res
      .status(200)
      .send({ success: true, msg: "Product Details", data: product_data });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

module.exports = {
  add_product,
};
