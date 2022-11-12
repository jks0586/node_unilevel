const express = require("express");
<<<<<<< HEAD
var cors = require("cors");
const app = express();
app.use(cors());
app.options("*", cors());
=======
var cors = require('cors')
const app = express();
app.use(cors());
app.options('*', cors());
>>>>>>> cd5dbc07049531469b73194ab2e05b75a8ae324f
const mongoose = require("mongoose");
const allRouter = require("./router");

app.use(express.json());
app.use((req, res, next) => {
<<<<<<< HEAD
  res.header("Access-control-Allow-Origin", "*");
  next();
});
=======
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

>>>>>>> cd5dbc07049531469b73194ab2e05b75a8ae324f
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

app.use("/", allRouter);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
