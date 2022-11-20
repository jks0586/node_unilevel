const Category = require("../../model/Category/CategoryModel");
const express = require("express");
const multer = require("multer");
const path = require("path");

const add_category = async (req, res) => {
  // console.log(req.body);
  try {
    if (req.body.length == 0) {
      // return res.json({ status: "error", error: "Product  is required" });
    }

    var category = new category({
      //    vendor_id:req.vendor_id,
      name: req.body.name,
      quality: req.body.quality,
    });

    const category_data = await category.save();
    res
      .status(200)
      .send({ success: true, msg: "category Details", data: category_data });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

module.exports = {
  add_category,
};
