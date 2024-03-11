const express = require('express');

const router = express.Router();

const {authSignUpController, fetchUserController} = require('../controller/auth-app-controller');;

//User "SignUp" router
router.route("/signup").post(authSignUpController);

router.route("/").get(fetchUserController);

console.log('I am in routes');

module.exports =  router;