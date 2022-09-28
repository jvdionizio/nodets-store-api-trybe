import { Router } from 'express';
import usersController from '../controllers/usersController';
import validateLogin from '../middlewares/validateLogin';

const loginRoutes = Router();

loginRoutes.post('/', validateLogin, usersController.getUser);

export default loginRoutes;