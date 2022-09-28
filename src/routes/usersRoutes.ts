import { Router } from 'express';
import usersController from '../controllers/usersController';

const usersRoutes = Router();

usersRoutes.post('/', usersController.addUser);
// usersRoutes.get('/', usersController.getAllUsers);

export default usersRoutes;