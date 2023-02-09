import { IProduct } from "../../Model/Product";
import { IProductRepository } from "../../Repository/ProductRepository";

export interface IDeleteProductUseCase {
  deleteProduct(id: string): Promise<IProduct>;
}

export class DeleteProductUseCaseImpl implements IDeleteProductUseCase {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async deleteProduct(id: string): Promise<IProduct> {
    return await this.productRepository.deleteProduct(id);
  }
}