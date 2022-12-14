const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.options("*", cors());
const mongoose = require("mongoose");
const allRouter = require("./router");

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-control-Allow-Origin", "*");
  next();
});
mongoose
  .connect("mongodb://127.0.0.1:27017/unilevel_mlm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection to database established`);
  })
  .catch((err) => {
    console.log(`db error ${err.message}`);
    process.exit(-1);
  });

//use image upload
app.use("/uploads", express.static("./uploads"));
app.use("/image", express.static("./uploads"));

function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }
}
app.use(errHandler);
app.use("/", allRouter);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
