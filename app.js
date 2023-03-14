const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv").config();

const app = express();

const ejs = require("ejs");
const router = require("./router");

app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

//getting the result on terminal
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

// app.listen(3000, function(req, res) {
//   console.log('the server started on port 3000');
// });

//     connectDB();

// Connect to the database
connectDB()
  .then(() => {
    // Start the server
    app.listen(process.env.PORT, function (req, res) {
      console.log("the server started on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to database:", error);
  });

// module.exports = app
