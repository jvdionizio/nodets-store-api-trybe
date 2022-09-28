import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/userInterface';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'jwt-secret';

const generateToken = (payload: IUser) => {
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

export default generateToken;