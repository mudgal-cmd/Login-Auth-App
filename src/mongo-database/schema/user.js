const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  address: mongoose.Schema.Types.Mixed,
  id : {
    type: mongoose.Schema.Types.Number,
    required: true,
    unique: true
  },
  email : mongoose.Schema.Types.String,
  username: {
    type: mongoose.Schema.Types.String,
    required : true,
    unique : true
  },
  password: {
    type: mongoose.Schema.Types.String,
    required : true,
    unique: true
  },
  name : mongoose.Schema.Types.Mixed,
  phone: mongoose.Schema.Types.String,
  version : mongoose.Schema.Types.Number
});

// {"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"new road","number":7682,"zipcode":"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","name":{"firstname":"john","lastname":"doe"},"phone":"1-570-236-7033","__v":0}