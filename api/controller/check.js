const Check = require("../model/check");
const jwt = require("jsonwebtoken");
const expressjwt = require("express-jwt");
const bcrypt = require("bcrypt");
require("cookie-parser");
require("dotenv").config();
console.log(process.env);

//SIGN METHOD

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const oldCheck = await Check.findOne({ email });
    if (oldCheck) {
      return res.status(409).send("Admin Already Exist. Please Login");
    }
    encryptedPassword = await bcrypt.hash(password, 10);
    const check = await Check.create({
      email,
      password: encryptedPassword,
    });

    res.status(200).json(check);
  } catch (error) {
    res.status(400).json({
      error: "Please enter your email and password",
    });
  }
};

//LOGIN METHOD
exports.login = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    if (Object.keys(req.body).length == 0) {
      return res.json({ status: "error", error: "email is required" });
    }
    const check = await Check.findOne({ email });
    if (!check) {
      return res.json({ status: "error", error: "Admin not found" });
    }
    const passwordcompare = await bcrypt.compare(password, check.password);
    if (passwordcompare) {
      const token = jwt.sign(
        {
          id: check._id,
          email: check.email,
        },

        process.env.JWT_SECRET
        // {}
      );
      return res.json({ check, token: token });
    } else {
      return res.json({ status: "error", error: "Check the Password again" });
    }
  } catch (error) {
    console.log(error);
  }
};
