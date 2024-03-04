const user = require("../mongo-database/schema/user");
const {validationResult, matchedData} = require("express-validator");
const hashPassword = require("../utils/helper");

const authController = async (req, res) => { //because of async method 

  const result = validationResult(req); //storing validaiton results in the "result" variable.

  if(!result.isEmpty()) return res.status(400).send(result.array()); //result.isEmpty() means there are no validation errors.

  // console.log(data);

  // data.password

  const data = matchedData(req);

  console.log(data);

  data.password = hashPassword(data.password);

  console.log(data);

  const userObj = new user(data); //created a new object of the USER model

  try {
    const savedUser = await userObj.save(); //this is an async method
    res.status(200).send(savedUser);
  }
  catch (err) {
    console.log(err);
  }

}

module.exports = authController;