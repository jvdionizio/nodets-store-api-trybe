import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/productInterface';
import connection from './connection';

const productModel = {
  addProduct: async (product: IProduct): Promise<IProduct> => {
    const { name, amount } = product;
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const createdProduct = { id: insertId, ...product };
    return createdProduct as IProduct;
  },
  getAllProducts: async (): Promise<IProduct[]> => {
    const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');
    return result as IProduct[];
  },
};

export default productModel;