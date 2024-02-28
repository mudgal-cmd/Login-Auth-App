const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/routes/auth-app-routes');
const validateSchema = require('./src/utils/validation-schema');
const {checkSchema} = require('express-validator');
const localStrategy = require("./src/strategy/local-strategy");
const passport = require("passport");
const session = require("express-session");


const app = express();

app.use(express.json());

passport.use(localStrategy);

app.use(session({
  secret: "my-secret",
  resave: false,
  saveUninitialized: false, 
  cookie: {
    maxAge : 60000*60
  }
}));

app.use(passport.initialize());

app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/auth_database")
  .then(console.log("Connected to the MongoDB database"))
  .catch(err => console.log(`Error is ${err}`));

app.post("/api/auth/login", passport.authenticate("local"), (req, res)=>{
  console.log("Login successfull");
  res.send("Login successfull");
});

app.use("/", checkSchema(validateSchema), router); //checkSchema is the middleware in the express-validator module, that is used to check and validate the schema.

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...');
});