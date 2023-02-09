import { useState } from 'react'
import ProductAPIDataSourceImpl from '../../Data/DataSource/API/ProductAPIDataSource'
import { ProductRepositoryImpl } from '../../Data/Repository/ProductRepositoryImpl'
import { IProduct } from '../../Domain/Model/Product'
import { GetProductsUseCaseImpl } from '../../Domain/UseCase/Product/GetProducts'

export default function ProductViewModel() {
  const [products, setProducts] = useState<IProduct[]>([])

  const UseCase = new GetProductsUseCaseImpl(new ProductRepositoryImpl(new ProductAPIDataSourceImpl()))

  async function getProducts() {
    const products = await UseCase.getProducts()
    setProducts(products)
  }

  return {
    products,
    getProducts,
  }
}