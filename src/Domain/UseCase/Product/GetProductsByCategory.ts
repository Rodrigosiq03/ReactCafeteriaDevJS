import { IProduct } from "../../Model/Product";
import { IProductRepository } from "../../Repository/ProductRepository";

export interface IGetProductsByCategoryUseCase {
  getProductsByCategory(category: string): Promise<IProduct[]>;
}

export class GetProductsByCategoryUseCaseImpl implements IGetProductsByCategoryUseCase {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async getProductsByCategory(category: string): Promise<IProduct[]> {
    return await this.productRepository.getProductsByCategpry(category);
  }
}