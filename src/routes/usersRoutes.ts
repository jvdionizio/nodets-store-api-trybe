import { Router } from 'express';
import usersController from '../controllers/usersController';
import validateUser from '../middlewares/validateUsers';

const usersRoutes = Router();

usersRoutes.post('/', validateUser, usersController.addUser);

export default usersRoutes;