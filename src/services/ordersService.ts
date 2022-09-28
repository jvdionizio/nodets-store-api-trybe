import { JwtPayload } from 'jsonwebtoken';
import IOrder from '../interfaces/orderInterface';
import ordersModel from '../models/ordersModel';
import usersModel from '../models/usersModel';
import productModel from '../models/productsModel';

const orderService = {
  getAllOrders: async (): Promise<IOrder[]> => {
    const getAllOrders = await ordersModel.getAllOrders();
    return getAllOrders;
  },
  addOrder: async (user: JwtPayload, productsIds: number[]): Promise<IOrder | null> => {
    const { username, password } = user;

    const userId = await usersModel.getUserId(username, password);

    if (!userId) {
      return null;
    }

    const orderId = await ordersModel.addOrder(userId);

    const result = Promise.all(
      productsIds.map(async (productId) => productModel.updateProduct(productId, orderId)),
    ).then(() => ({ userId, productsIds }));

    return result;
  },
};

export default orderService;