import { IProduct } from "../../Model/Product";
import { IProductRepository } from "../../Repository/ProductRepository";

export interface IGetProductsUseCase {
  getProducts(): Promise<IProduct[]>;
}

export class GetProductsUseCaseImpl implements IGetProductsUseCase {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async getProducts() {
    return await this.productRepository.getProducts();
  }
}