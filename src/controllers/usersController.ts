import { Request, Response } from 'express';
import generateToken from '../helpers/token';
import usersService from '../services/usersService';

const usersController = {
  addUser: async (req: Request, res: Response): Promise<Response> => {
    const newUser = await usersService.addUser(req.body);
    const token = generateToken(newUser);
    return res.status(201).json({ token });
  },
};

export default usersController;