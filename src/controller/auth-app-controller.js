const user = require("../mongo-database/schema/user");

const authController = async (req, res) => { //because if async method 

  const {body} = req;

  const userObj = new user(body); //created a new object of the USER model

  try {
    const savedUser = await userObj.save(); //this is an async method
    res.status(200).send(savedUser);
  }
  catch (err) {
    console.log(err);
  }

}

module.exports = authController;