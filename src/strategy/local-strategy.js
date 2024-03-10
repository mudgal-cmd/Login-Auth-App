const passport = require('passport');

const {Strategy} = require("passport-local");

const userModel = require("../mongo-database/schema/user");

const {compareHashedPassword} = require("../utils/helper");

passport.serializeUser((user, done) => {
  
  console.log("Inside Serializer function");

  done(null, user);

});

passport.deserializeUser(async (id, done)=>{

  console.log("Inside deserializer function");

  const findUser = await userModel.findById(id);

  done(null, findUser);

});

const strategyVerifyFunction = (async (username, password, done) => {//if using email to validate, pass email in the function params and findOne method params.

  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);

try{

  const findUser = await userModel.findOne({username}); //"username" field should match what is present in the schema/model/db. In other words there needs to be a "username" field in the db.

  if(!findUser) throw new Error("Error: User not found");

  // if(password !== findUser.password) throw new Error("Password does not match"); //Checking the plain passwords.

  //checking the hashed passwords.

  if(compareHashedPassword(password, findUser.password) === false) throw new Error("Password do not match");

  done(null, findUser);

}
catch(err) {
  done(err, null);
  // console.log(err);
}
  
});



// const localStrategy = new Strategy({usernameField : "email"},strategyVerifyFunction);    // in case we are going to pass "email" as the value in the username field in the postman. However, keep in mind that, username in the db should store email, even though the field name says username and not email.
const localStrategy = new Strategy(strategyVerifyFunction);

module.exports = localStrategy;

