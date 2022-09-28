import { Request, Response } from 'express';
import { IUserAuthRequest } from '../interfaces/userInterface';
import orderService from '../services/ordersService';

const orderController = {
  getAllOrders: async (req: Request, res: Response): Promise<Response> => {
    const orders = await orderService.getAllOrders();
    return res.status(200).json(orders);
  },
  addOrder: async (req: IUserAuthRequest, res: Response): Promise<Response> => {
    const { productsIds, userId } = req.body;

    const result = await orderService.addOrder(userId, productsIds);

    return res.status(201).json(result);
  },
};

export default orderController;