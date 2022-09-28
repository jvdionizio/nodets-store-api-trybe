import IUser from '../interfaces/userInterface';
import usersModel from '../models/usersModel';

const usersService = {
  addUser: async (user: IUser): Promise<IUser> => {
    const newUser = await usersModel.addUser(user);
    return newUser;
  },
};

export default usersService;