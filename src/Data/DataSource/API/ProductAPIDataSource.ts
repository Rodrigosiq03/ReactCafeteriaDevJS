import { IProduct } from "../../../Domain/Model/Product";
import IProductsDataSource from "../ProductsDataSource";
import { IProductAPIEntity } from "./Entity/ProductAPIEntity";

const BASE_URL = "https://zyled812nk.execute-api.us-east-1.amazonaws.com/Prod";

const myOwnFetch = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
};

export default class ProductAPIDataSourceImpl implements IProductsDataSource {

  async getProducts(): Promise<IProduct[]> {
    const response = await myOwnFetch<IProductAPIEntity>(`${BASE_URL}/FetchAllProducts`);
    console.log("response", response.Items);
    
    const products = response.Items;

    console.log("products", products);
    

    return products.map(product => ({
      id: product.id,
      productName: product.productName,
      productPrice: product.productPrice,
      productDesc: product.productDesc,
      productCategory: product.productCategory
    }));

  }

  async getProductsByCategpry(category: string): Promise<IProduct[]> {
    const response = await myOwnFetch<IProductAPIEntity>(`${BASE_URL}/FetchProductsByCategory/${category}`);
    const products = response.Items;
    return products.map(product => ({
      id: product.id,
      productName: product.productName,
      productPrice: product.productPrice,
      productDesc: product.productDesc,
      productCategory: product.productCategory
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
    const newProduct = response.Items[0];
    return {
      id: newProduct.id,
      productName: newProduct.productName,
      productPrice: newProduct.productPrice,
      productDesc: newProduct.productDesc,
      productCategory: newProduct.productCategory
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
    const updatedProduct = response.Items[0];
    return {
      id: updatedProduct.id,
      productName: updatedProduct.productName,
      productPrice: updatedProduct.productPrice,
      productDesc: updatedProduct.productDesc,
      productCategory: updatedProduct.productCategory
    };
  }

  async deleteProduct(id: string): Promise<IProduct> {
    const response = await myOwnFetch<IProductAPIEntity>(`${BASE_URL}/DeleteProduct/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const deletedProduct = response.Items[0];
    return {
      id: deletedProduct.id,
      productName: deletedProduct.productName,
      productPrice: deletedProduct.productPrice,
      productDesc: deletedProduct.productDesc,
      productCategory: deletedProduct.productCategory
    };
  }

}