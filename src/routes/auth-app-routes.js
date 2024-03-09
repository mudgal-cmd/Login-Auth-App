const express = require('express');

const router = express.Router();

const authSignUpController = require('../controller/auth-app-controller');;

//User "SignUp" router
router.route("/signup").post(authSignUpController);

console.log('I am in routes');

module.exports =  router;