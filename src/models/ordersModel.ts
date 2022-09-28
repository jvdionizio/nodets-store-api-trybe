import IOrder from '../interfaces/orderInterface';
import connection from './connection';

const ordersModel = {

  getAllOrders: async (): Promise<IOrder[]> => {
    const [rows] = await connection.execute(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS p
      ON o.id = p.orderId
      GROUP BY id
      ORDER BY userId, id`,
      [],
    );

    return rows as IOrder[];
  },

};

export default ordersModel;