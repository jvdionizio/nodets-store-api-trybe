import { Request, Response } from 'express';
import generateToken from '../helpers/token';
import usersService from '../services/usersService';

const usersController = {
  addUser: async (req: Request, res: Response): Promise<Response> => {
    const newUser = await usersService.addUser(req.body);
    const token = generateToken(newUser);
    return res.status(201).json({ token });
  },
  getUser: async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const result = await usersService.getUser(username, password);

    if (result) {
      const token = generateToken({ username, password });
      return res.status(200).json({ token });
    }
    return res.status(401).json({ message: 'Username or password invalid' });
  },
};

export default usersController;