import { IProduct } from "../../Model/Product";
import { IProductRepository } from "../../Repository/ProductRepository";

export interface IUpdateProductUseCase {
  updateProduct(product: IProduct): Promise<IProduct>;
}

export class UpdateProductUseCaseImpl implements IUpdateProductUseCase {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async updateProduct(product: IProduct): Promise<IProduct> {
    return await this.productRepository.updateProduct(product);
  }
}