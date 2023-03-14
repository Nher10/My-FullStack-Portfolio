// const {MongoClient} = require('mongodb');
// const dotenv = require('dotenv').config()

// MongoClient.connect(process.env.CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
//   if (err) {
//     console.log(err);
//   } else {
//     module.exports = client;

//     const app = require('./app');

//     app.listen(process.env.PORT, function(req, res) {
//       console.log('the server started on port 3000');
//     });
//   }
// });

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected...`);
    console.log(`hostname: ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
