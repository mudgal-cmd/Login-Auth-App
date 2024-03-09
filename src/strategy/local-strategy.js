const passport = require('passport');

const {Strategy} = require("passport-local");

const userModel = require("../mongo-database/schema/user");

passport.serializeUser((user, done) => {
  
  console.log("Inside Serializer function");

  done(null, user);

});

passport.deserializeUser(async (id, done)=>{

  console.log("Inside deserializer function");

  const findUser = await userModel.findById(id);

  done(null, findUser);

});

const strategyVerifyFunction = async (username, password, done) => {

try{
  const findUser = await userModel.findOne({username});

  if(!findUser) throw new Error("Error: User not found");

  if(password !== findUser.password) throw new Error("Password does not match");

  done(null, findUser);

}
catch(err) {done(err, null);}
  
}

const localStrategy = new Strategy(strategyVerifyFunction);

module.exports = localStrategy;

