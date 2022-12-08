const Role = require("../../model/Role/RoleModel");
const express = require("express");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const addRole = async (req, res, next) => {
  console.log(req.file.filename);
  try {
    req.body.image = req.file.filename;

    var role = new Role({
      name: req.body.name,
      slug: req.body.slug,
      status: req.body.status,
      image: req.file.filename,
    });

    const role_data = await role.save();
    role_data.image = process.env.API_URL + role_data.image;
    res
      .status(200)
      .send({ success: true, msg: "Role Details", data: role_data });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

//Getting all role
const getRole = async (req, res) => {
  try {
    const roles = await Role.find();
    roles.map((value, index) => {
      return (value.image = process.env.API_URL + value.image);
    });

    res.json(roles);
  } catch (error) {
    res.send("Error", error);
  }
};

//Getting a single role by id
const findSingleRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    role.image = process.env.API_URL + role.image;
    res.json(role);
  } catch (error) {
    res.send("Error", error);
  }
};

//Update All category
const updateRole = async (req, res) => {
  const filter = { _id: req.params.id };
  const roleUpdate = await Role.findOneAndUpdate(filter, req.body, {
    new: true,
  });
  roleUpdate.image = process.env.API_URL + roleUpdate.image;
  res.json(roleUpdate);
};

//Delete Category
const deleteRole = async (req, res) => {
  try {
    const roledelete = await Role.findByIdAndRemove(req.params.id);
    res.json(roledelete);
  } catch (error) {
    res.send("Error", error);
  }
};

module.exports = {
  addRole,
  getRole,
  findSingleRole,
  updateRole,
  deleteRole,
};
