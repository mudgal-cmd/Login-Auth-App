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

//Endpoint to check if the user is logged in or not/ check user's session is active or not.

app.get("/api/auth/status", (req, res)=>{
  if(req.user) return res.status(200).send("User is logged in. You can proceed.");
  return res.status(401).send("User not authenticated. Please login. ");
});

//Endpoint for the user login
app.post("/api/users/login", passport.authenticate("local"), (req, res)=>{
  console.log("Login successfull");
  // res.send("Login successfull");
  // console.log(passport);
  console.log(req.body);
  res.status(200).json({"status": "success", "data": req.user});
});


//Endpoint for new signup.
app.use("/api/user", checkSchema(validateSchema), router); //checkSchema is the middleware in the express-validator module, that is used to check and validate the schema.



app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...');
});