const schema = require("./joi");
const joi = require("./joi");

module.exports = {
  addUserValidation: async (req, resp, next) => {
    const value = await schema.validate(req.body);
    if (value.error) {
      resp.json({
        success: 0,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
