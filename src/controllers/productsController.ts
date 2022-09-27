import { Request, Response } from 'express';
import productsService from '../services/productsService';

const productsController = {
  addProduct: async (req: Request, res: Response): Promise<Response> => {
    const { name, amount } = req.body;

    const product = await productsService.addProduct({ name, amount });

    if (!product) return res.status(404);

    return res.status(201).json(product);
  },
};

export default productsController;