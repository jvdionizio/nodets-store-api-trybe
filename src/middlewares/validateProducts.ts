import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const schema = (body: object) => Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': '"name" is required',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.empty': '"amount" is required',
  }),
}).validate(body);

const validateProduct = async (
  req:Request,
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

export default validateProduct;