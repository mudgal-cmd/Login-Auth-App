const mongoose = require("mongoose");

const userModel = require("../schema/user");

const userData = require("../../data/user-data");

mongoose.connect("mongodb://localhost:27017/auth_database")
  .then(console.log("Connected"))
  .catch(err => console.log(err));

userData().then(data => {

  data.forEach(async user => {
    const newUser = new userModel(user);

    const saveUser = await newUser.save();

  });

  // console.log(data);

}).catch(err => console.log(err));