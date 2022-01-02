const express = require("express");
const route = express.Router();

const AuthController = require("../Controllers/AuthController");


route.post('/registration',AuthController.register);
route.post('/Login',AuthController.login);


module.exports=route;