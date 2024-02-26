const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/routes/auth-app-routes');
const validateSchema = require('./src/utils/validation-schema');
const {checkSchema, validationResult} = require('express-validator');

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/auth_database")
  .then(console.log("Connected to the MongoDB database"))
  .catch(err => console.log(`Error is ${err}`));

app.use("/", checkSchema, router);

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...');
});