import { NextFunction, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { IUserAuthRequest } from '../interfaces/userInterface';

const userAuth = async (
  req: IUserAuthRequest,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const result = jwt.verify(authorization, 'jwt_secret');

    req.userInfo = result as JwtPayload;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}; 

export default userAuth;