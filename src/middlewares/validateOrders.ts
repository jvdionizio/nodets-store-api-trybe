import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const schema = (body: object) => Joi.object({
  productsIds: Joi.array().items(Joi.number().required()).required().messages({
    'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
  }),
}).validate(body);

const orderValidation = async (
  req: Request,
  res: Response, 
  next: NextFunction,
): Promise<Response | void> => {
  const { error } = schema(req.body);

  if (error) {
    let errorStatus = 422;

    if (error.details[0].type === 'any.required' || error.details[0].type === 'string.empty') {
      errorStatus = 400;
    }

    return res.status(errorStatus).json({ message: error.message });
  }

  next();
};

export default orderValidation;