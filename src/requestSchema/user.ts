import Joi from "joi";

export default {
  register: Joi.object().keys({
    body: Joi.object()
      .keys({
        email: Joi.string().email().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.ref("password"),
      })
      .with("password", "confirmPassword")
      .required(),
  }),
  update: Joi.object().keys({
    body: Joi.object()
      .keys({
        firstName: Joi.string(),
        lastName: Joi.string(),
        username: Joi.string(),
        image: Joi.string(),
      })
      .required(),
  }),
};
