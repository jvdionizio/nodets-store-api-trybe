import IOrder from '../interfaces/orderInterface';
import ordersModel from '../models/ordersModel';

const orderService = {
  getAllOrders: async (): Promise<IOrder[]> => {
    const getAllOrders = await ordersModel.getAllOrders();
    return getAllOrders;
  },
};

export default orderService;