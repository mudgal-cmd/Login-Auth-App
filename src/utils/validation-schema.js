const validateSchema = {

  userid: {
    notEmpty : true,
    errorMessage : "User ID cannot be empty",
    
  }, 

  username : {
    in: ['body'], //this means that the validation rules apply to parameters in the body. By using 'in' we tell express-validator to look for the specified field in the request body
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
    in: ['body'],
    isLength: {
      options: {
        min: 8,
        max: 20
      },
      errorMessage : "Password must be at least 5 characters and at max 20."
    },
    notEmpty: true
  },
  
};

module.exports = validateSchema;