import { Router } from 'express';
import orderController from '../controllers/ordersController';
import userAuth from '../middlewares/authmiddleware';
import orderValidation from '../middlewares/validateOrders';

const ordersRoutes = Router();

ordersRoutes.post('/', userAuth, orderValidation, orderController.addOrder);
ordersRoutes.get('/', orderController.getAllOrders);

export default ordersRoutes;