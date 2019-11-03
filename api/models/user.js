import Joi from 'joi';


// Validate user form in HTTP request
const userCheck = (query, checker) => !Joi.validate(query, checker).error;

// User schema
const user = Joi.object().keys({
  name: Joi.string().min(2).max(35).required(),
  study: Joi.string().valid('Komtek', 'Data').required(),
  rfid: Joi.string().min(0).required(),
  kaffeScore: Joi.number().min(0).required(),
  year: Joi.number().min(1).max(6).required(),
});


export { userCheck, user };