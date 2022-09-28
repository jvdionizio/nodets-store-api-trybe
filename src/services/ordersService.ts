import IOrder from '../interfaces/orderInterface';
import ordersModel from '../models/ordersModel';
import productModel from '../models/productsModel';

const orderService = {
  getAllOrders: async (): Promise<IOrder[]> => {
    const getAllOrders = await ordersModel.getAllOrders();
    return getAllOrders;
  },
  addOrder: async (userId: number, productsIds: number[]): Promise<IOrder | null> => {
    const orderId = await ordersModel.addOrder(userId);

    const result = Promise.all(
      productsIds.map(async (productId) => productModel.updateProduct(productId, orderId)),
    ).then(() => ({ userId, productsIds }));

    return result;
  },
};

export default orderService;