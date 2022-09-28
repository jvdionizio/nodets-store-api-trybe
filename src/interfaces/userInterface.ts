import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface IUser {
  id?: number,
  username: string,
  classe: string,
  level: string,
  password?: string,
}

export interface IUserAuthRequest extends Request {
  userInfo?: JwtPayload
}