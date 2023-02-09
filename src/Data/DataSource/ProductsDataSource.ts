import { IProduct } from "../../Domain/Model/Product";

export default interface IProductsDataSource {
  getProducts(): Promise<IProduct[]>;
  getProductsByCategpry(category: string): Promise<IProduct[]>;
  addProduct(product: IProduct): Promise<IProduct>;
  updateProduct(product: IProduct): Promise<IProduct>;
  deleteProduct(id: string): Promise<IProduct>;
}