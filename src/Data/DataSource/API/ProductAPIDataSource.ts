import { IProduct } from "../../../Domain/Model/Product";
import IProductsDataSource from "../ProductsDataSource";
import { IProductAPIEntity } from "./Entity/ProductAPIEntity";

const BASE_URL = "https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod";

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myOwnFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args)
}

export default class ProductAPIDataSourceImpl implements IProductsDataSource {
  
  async getProducts(): Promise<IProduct[]> {
    const response = await myOwnFetch<IProductAPIEntity[]>(`${BASE_URL}/FetchAllProducts`);
    const products = await response.json();
    console.log(products);
    
    return products.map(product => ({
      id: product.Items.products[0].id,
      productName: product.Items.products[0].productName,
      productPrice: product.Items.products[0].productPrice,
      productDesc: product.Items.products[0].productDesc,
      productCategory: product.Items.products[0].productCategory
    }));

  }

  async getProductsByCategpry(category: string): Promise<IProduct[]> {
    const response = await myOwnFetch<IProductAPIEntity[]>(`${BASE_URL}/FetchProductsByCategory/${category}`);
    const products = await response.json();
    return products.map(product => ({
      id: product.Items.products[0].id,
      productName: product.Items.products[0].productName,
      productPrice: product.Items.products[0].productPrice,
      productDesc: product.Items.products[0].productDesc,
      productCategory: product.Items.products[0].productCategory
    }));
  }

  async addProduct(product: IProduct): Promise<IProduct> {
    const response = await myOwnFetch<IProductAPIEntity>(`${BASE_URL}/CreateProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });
    const newProduct = await response.json();
    return {
      id: newProduct.Items.products[0].id,
      productName: newProduct.Items.products[0].productName,
      productPrice: newProduct.Items.products[0].productPrice,
      productDesc: newProduct.Items.products[0].productDesc,
      productCategory: newProduct.Items.products[0].productCategory
    };
  }

  async updateProduct(product: IProduct): Promise<IProduct> {
    const response = await myOwnFetch<IProductAPIEntity>(`${BASE_URL}/UpdateProduct/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });
    const updatedProduct = await response.json();
    return {
      id: updatedProduct.Items.products[0].id,
      productName: updatedProduct.Items.products[0].productName,
      productPrice: updatedProduct.Items.products[0].productPrice,
      productDesc: updatedProduct.Items.products[0].productDesc,
      productCategory: updatedProduct.Items.products[0].productCategory
    };
  }

  async deleteProduct(id: string): Promise<IProduct> {
    const response = await myOwnFetch<IProductAPIEntity>(`${BASE_URL}/DeleteProduct/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const deletedProduct = await response.json();
    return {
      id: deletedProduct.Items.products[0].id,
      productName: deletedProduct.Items.products[0].productName,
      productPrice: deletedProduct.Items.products[0].productPrice,
      productDesc: deletedProduct.Items.products[0].productDesc,
      productCategory: deletedProduct.Items.products[0].productCategory
    };
  }

}