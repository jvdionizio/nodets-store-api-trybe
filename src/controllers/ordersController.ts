import { Request, Response } from 'express';
import { IUserAuthRequest } from '../interfaces/userInterface';
import orderService from '../services/ordersService';

const orderController = {
  getAllOrders: async (req: Request, res: Response): Promise<Response> => {
    const orders = await orderService.getAllOrders();
    return res.status(200).json(orders);
  },
  addOrder: async (req: IUserAuthRequest, res: Response): Promise<Response> => {
    const { productsIds } = req.body;
    if (!req.userInfo) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const result = await orderService.addOrder(req.userInfo, productsIds);

    return res.status(201).json(result);
  },
};

export default orderController;