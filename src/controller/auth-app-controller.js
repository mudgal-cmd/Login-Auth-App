const user = require("../mongo-database/schema/user");

const authController = async (req, res) => {

  const {body} = req;

  const userObj = new user(body);

  try {
    const savedUser = await userObj.save(); //this is an async method
    res.status(200).send(savedUser);
  }
  catch (err) {
    console.log(err);
  }

}

module.exports = authController;