const bcrypt = require("bcrypt");

const saltRounds = 10;

const hashPassword = (password) => {

  const salt = bcrypt.genSaltSync(saltRounds);
  

}

module.exports = hashPassword;