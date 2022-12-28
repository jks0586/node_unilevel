const Cart = require("../../model/Cart/CartModel");
const express = require("express");
const multer = require("multer");
const path = require("path");
require("dotenv").config(); 

const addCart = async (req, res, next) => {
 console.log(req.file.filename);
  try {
    req.body.image = req.file.filename;

    var cart = new Cart({
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      image: req.file.filename,
    });
 
    const cart_data = await cart.save();
    cart_data.image=process.env.API_URL+cart_data.image;
    res
      .status(200)
      .send({ success: true, msg: "Cart Details", data: cart_data });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};



//Getting all category
const getCart = async (req, res) => {
  try {
    const carts = await Cart.find();
    carts.map((value,index)=>{
    return value.image=process.env.API_URL+value.image;
    })
 
    res.json(carts);
  } catch (error) {
    res.send("Error", error);
  }
};


//Getting a single Category by id
const findSingleCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    cart.image=process.env.API_URL+cart.image;
    res.json(cart);
  } catch (error) {
    res.send("Error", error);
  }
};


//Update All category
const updateCart = async (req, res) => {
const filter = { _id: req.params.id };
const cartUpdate = await Cart.findOneAndUpdate(filter, req.body, {
new: true,
});
cartUpdate.image=process.env.API_URL+cartUpdate.image;
 res.json(cartUpdate);
};


//Delete Category
const deleteCart = async (req, res) => {
  try {
    const cartdelete = await Cart.findByIdAndRemove(req.params.id);
    res.json(cartdelete);
  } catch (error) {
    res.send("Error", error);
  }
};





module.exports = {
  addCart,
  getCart,
  findSingleCart,
  updateCart,
  deleteCart,
};
