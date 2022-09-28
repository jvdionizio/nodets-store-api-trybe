import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

import usersModel from '../models/usersModel';

dotenv.config();

const secret = process.env.JWT_SECRET || 'jwt-secret';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, secret) as any;

    const { username } = decoded;

    const id = await usersModel.getUserId(username);

    if (!id) return res.status(401).json({ message: 'Invalid token' });

    req.body.userId = id;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};