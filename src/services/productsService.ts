import IProduct from '../interfaces/productInterface';
import productModel from '../models/productsModel';

const productsServices = {
  addProduct: async (product: IProduct): Promise<IProduct> => {
    const newProduct = productModel.addProduct(product);
    return newProduct;
  },
};

export default productsServices;