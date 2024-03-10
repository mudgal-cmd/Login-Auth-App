const bcrypt = require("bcrypt");

const saltRounds = 10;

const hashPassword = (password) => { //if using the async versions add "async-await"

  const salt = bcrypt.genSaltSync(saltRounds); //sync version of genSaltSync to generate the salt value.
  
  return bcrypt.hashSync(password, salt); //Sync version used, can use "hash" which is async. Hashing the password.

}

const compareHashedPassword = (plainPwd, hashedPwd) =>{
  return bcrypt.compareSync(plainPwd, hashedPwd);
}

module.exports = {hashPassword, compareHashedPassword};