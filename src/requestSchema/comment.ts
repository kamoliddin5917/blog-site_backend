import Joi from "joi";

export default {
  comment: Joi.object().keys({
    body: Joi.object()
      .keys({
        comment: Joi.string().required(),
        post: Joi.string().required(),
        commentId: Joi.string(),
      })
      .required(),
  }),

  update: Joi.object().keys({
    body: Joi.object()
      .keys({
        comment: Joi.string().required(),
      })
      .required(),

    params: Joi.object()
      .keys({
        commentId: Joi.string().required(),
      })
      .required(),
  }),

  delete: Joi.object().keys({
    params: Joi.object()
      .keys({
        commentId: Joi.string().required(),
      })
      .required(),
  }),
};
