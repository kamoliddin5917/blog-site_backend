import Joi from "joi";

export default {
  post: Joi.object().keys({
    body: Joi.object()
      .keys({
        media: Joi.string().required(),
        title: Joi.string().required(),
        body: Joi.string().required(),
      })
      .required(),
  }),

  update: Joi.object().keys({
    body: Joi.object()
      .keys({
        media: Joi.string(),
        title: Joi.string(),
        body: Joi.string(),
      })
      .required(),

    params: Joi.object()
      .keys({
        postId: Joi.string().required(),
      })
      .required(),
  }),

  delete: Joi.object().keys({
    params: Joi.object()
      .keys({
        postId: Joi.string().required(),
      })
      .required(),
  }),
};
