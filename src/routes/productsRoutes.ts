import { Router } from 'express';
import productsController from '../controllers/productsController';
import validateProduct from '../middlewares/validateProducts';

const productsRoutes = Router();

productsRoutes.post('/', validateProduct, productsController.addProduct);
productsRoutes.get('/', productsController.getAllProducts);

export default productsRoutes;