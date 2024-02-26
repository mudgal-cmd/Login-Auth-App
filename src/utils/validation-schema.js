const validateSchema = {

  username : {
    isLength: {
      options: {
        min: 5,
        max: 20
      },
      errorMessage : "Username must be at least 5 characters and at max 20."
    },
    notEmpty: true
    
  },
  password: {
    isLength: {
      options: {
        min: 8,
        max: 20
      }
    },
    errorMessage : "Password must be at least 5 characters and at max 20."
  },
  notEmpty: true
};

module.exports = validateSchema;