export interface IProduct {
  id: string;
  productName: string;
  productPrice: number;
  productDesc: string;
  productCategory: string;
  productImage?: string;
  productQuantity?: number;
}


export interface IItems {
  Items: {
    products: IProduct[]
  }[];
}