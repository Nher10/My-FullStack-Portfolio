const express = require("express");
const app = express();

const ejs = require("ejs");
const router = require("./router");

app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

app.use("/", router);

app.listen(3000, function () {
  console.log("the server started on port 3000");
});
