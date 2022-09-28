import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRoutes = Router();

productsRoutes.post('/', productsController.addProduct);
productsRoutes.get('/', productsController.getAllProducts);

export default productsRoutes;