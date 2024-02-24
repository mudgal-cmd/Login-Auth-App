const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost:27017/auth_database")
  .then(console.log("Connected to the MongoDB database"))
  .catch(err => console.log(`Error is ${err}`));

app.listen(()=>{
  console.log('Server is listening on port 5000...');
});