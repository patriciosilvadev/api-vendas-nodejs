import * as Joi from '@hapi/joi';

const params = Joi.object({
  id: Joi.number().required()
});

const payload = Joi.object({
  descricao: Joi.string().min(5).max(200).required()
});

export const detail = {
  params
};

export const create = {
  payload
};

export const update = {
  params,
  payload
};

//