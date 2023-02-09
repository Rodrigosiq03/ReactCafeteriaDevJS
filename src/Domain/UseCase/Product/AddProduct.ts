import { IProduct } from "../../Model/Product";
import { IProductRepository } from "../../Repository/ProductRepository";

export interface IAddProductUseCase {
  addProduct(product: IProduct): Promise<IProduct>;
}

export class AddProductUseCaseImpl implements IAddProductUseCase {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async addProduct(product: IProduct): Promise<IProduct> {
    return await this.productRepository.addProduct(product);
  }
}