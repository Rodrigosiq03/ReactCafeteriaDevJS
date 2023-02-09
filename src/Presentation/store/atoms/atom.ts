import { atom } from "recoil";
import { IProduct } from "../../../Domain/Model/Product";

export const cartState = atom({
  key: "cartState",
  default: [] as IProduct[],
});

