const joi = require("joi");

const schema = joi.object().keys({
  fullname: joi.string().max(100).required(),
  mobileNumber: joi
    .number()
    .integer()
    .min(1000000000)
    .message("Invalid Number")
    .max(9999999999),
  email: joi.string().email().required(),
  password: joi.string().min(5).max(8).required(),
  confirm_password: joi.string().valid(joi.ref("password")).required(),
  address: joi.string().required(),
  country: joi.string().required(),
  state: joi.string().required(),
  city: joi.string().required(),
});

module.exports = schema;

// Full name
// mobile num
// email id
// Profile Photo
// password
// address
// country
// state
// city
