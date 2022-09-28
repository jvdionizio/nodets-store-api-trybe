import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/userInterface';

const JWT_SECRET = 'paoComManteiga';
const JWT_OPTIONS: jwt.SignOptions = { algorithm: 'HS256', expiresIn: '1d' };

const generateToken = (payload: IUser) => {
  const token = jwt.sign(payload, JWT_SECRET, JWT_OPTIONS);
  return token;
};

export default generateToken;