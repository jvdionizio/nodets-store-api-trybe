import { IUser } from '../interfaces/userInterface';
import usersModel from '../models/usersModel';

const usersService = {
  addUser: async (user: IUser): Promise<IUser> => {
    const newUser = await usersModel.addUser(user);
    return newUser;
  },
  getUser: async (username: string, password: string): Promise<IUser | null> => {
    const user = await usersModel.getUser(username, password);
    return user;
  },
};

export default usersService;