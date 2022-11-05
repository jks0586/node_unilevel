//Set up mongoose connection
const mongoose = require('mongoose');
// const mongoDB = 'mongodb://localhost:27017/letscms';
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;



// mongoose.connect(
//     'mongodb://localhost:27017/letscms',
//     (err) => {
//         if (err) console.log(err)
//         else console.log("mongdb is connected");
//     }
// );


mongoose
    .connect('mongodb://localhost:27017/letscms', {
        useNewUrlParser: true,
            useUnifiedTopology: true
    })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

module.exports = mongoose;