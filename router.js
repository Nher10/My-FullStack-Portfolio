const express = require("express");
const router = express.Router();
const userController = require("./controller/userController");
const backendController = require('./controller/backendController')

//userController router
router.get("/", userController.index);
router.get("/blog", userController.blog);
router.get("/about", userController.about);
router.get("/contact", userController.contact);

//adminController router
router.get('/admin/register', backendController.register);


module.exports = router;
