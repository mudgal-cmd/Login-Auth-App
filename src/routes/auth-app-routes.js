const express = require('express');

const router = express.Router();

const authController = require('../controller/auth-app-controller');

router.route("/api/adduser").post(authController);

console.log('I am in routes');

module.exports =  router;