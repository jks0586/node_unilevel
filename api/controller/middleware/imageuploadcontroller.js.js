const Description = require("../../model/DescriptionModel");
require("dotenv").config();
const multer = require("multer");

const addImage = (req, res) => {
  try {
    const description_data = process.env.API_URL + req.file.filename;
    console.log(description_data);
    res.json(description_data);
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

const getDescription = async (req, res) => {
  try {
    const description = await Description.find();
    description.map((value, index) => {
      return (value.image = process.env.UPLOAD_URL + value.image);
    });

    res.json(description);
  } catch (error) {
    res.send("Error", error);
  }
};

module.exports = {
  addImage,
  getDescription,
};
