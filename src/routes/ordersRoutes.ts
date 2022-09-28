import { Router } from 'express';
import orderController from '../controllers/ordersController';

const ordersRoutes = Router();

ordersRoutes.get('/', orderController.getAllOrders);

export default ordersRoutes;