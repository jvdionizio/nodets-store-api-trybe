import IProduct from '../interfaces/productInterface';
import productModel from '../models/productsModel';

const productsServices = {
  addProduct: async (product: IProduct): Promise<IProduct> => {
    const newProduct = productModel.addProduct(product);
    return newProduct;
  },
  getAllProducts: async (): Promise<IProduct[]> => {
    const products = await productModel.getAllProducts();
    return products;    
  },
};

export default productsServices;