import { IProduct } from "../Model/Product";

export interface IProductRepository {
  getProducts(): Promise<IProduct[]>;
  getProductsByCategpry(category: string): Promise<IProduct[]>;
  addProduct(product: IProduct): Promise<IProduct>;
  updateProduct(product: IProduct): Promise<IProduct>;
  deleteProduct(id: string): Promise<IProduct>;
}