const user = require("../mongo-database/schema/user");
const {validationResult, matchedData} = require("express-validator");
const hashPassword = require("../utils/helper");

const authSignUpController = async (req, res) => { //because of the async "save" method 

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

const fetchUserController = (req, res)=>{
  console.log(req.session.id);
  // if()
  req.sessionStore.get(req.session.id, (err, sessionData)=>{
    if(err) throw err;
    else{
      console.log("Inside Session Store");
      console.log(sessionData);
      if(!sessionData) return res.status(204).send("No session");
      res.status(200).send("Welcome");
    }
  });
}

module.exports = {authSignUpController, fetchUserController};