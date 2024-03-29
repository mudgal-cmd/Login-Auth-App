const mongoose = require("mongoose");

const userModel = require("../schema/user");

const userData = require("../../data/user-data");

const {hashPassword} = require("..//../utils/helper");

mongoose.connect("mongodb://localhost:27017/auth_database")
  .then(console.log("Connected"))
  .catch(err => console.log(err));

userData().then(data => {

  data.forEach(async user => {
    
    user.password = hashPassword(user.password);
    
    const model = new userModel(user);

    await model.save();

    // console.log(newUser);

  });

  // console.log(data);

}).catch(err => console.log(err));