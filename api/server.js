const express = require("express");
const app = express();
const mongoose = require("mongoose");
const allRouter=require('./router');
app.use (express.json());
mongoose.connect('mongodb://127.0.0.1:27017/unilevel_mlm',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(()=>{
    console.log(`connection to database established`);
}).catch(err=>{
    console.log(`db error ${err.message}`);
    process.exit(-1)
})

app.use('/',allRouter);

app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});

