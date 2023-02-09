import { IProduct } from "../../Domain/Model/Product";
import { IProductRepository } from "../../Domain/Repository/ProductRepository";
import IProductsDataSource from "../DataSource/ProductsDataSource";

export class ProductRepositoryImpl implements IProductRepository {
  private dataSource: IProductsDataSource;

  constructor(dataSource: IProductsDataSource) {
    this.dataSource = dataSource;
  }

  async getProducts(): Promise<IProduct[]> {
    return await this.dataSource.getProducts();
  }

  async getProductsByCategpry(category: string): Promise<IProduct[]> {
    return await this.dataSource.getProductsByCategpry(category);
  }

  async addProduct(product: IProduct): Promise<IProduct> {
    return await this.dataSource.addProduct(product);
  }

  async updateProduct(product: IProduct): Promise<IProduct> {
    return await this.dataSource.updateProduct(product);
  }

  async deleteProduct(id: string): Promise<IProduct> {
    return await this.dataSource.deleteProduct(id);
  }
}