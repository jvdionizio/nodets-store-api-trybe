import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/userInterface';
import connection from './connection';

const usersModel = {
  addUser: async (user: IUser): Promise<IUser> => {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const newUser = { id: insertId, ...user };
    return newUser as IUser;
  },
  getUser: async (username: string, password: string): Promise<IUser | null> => {
    const [result] = await connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
    );

    const [user] = result as IUser[];

    return user || null;
  },
};

export default usersModel;