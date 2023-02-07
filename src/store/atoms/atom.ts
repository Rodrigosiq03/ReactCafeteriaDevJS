import { atom } from "recoil";
import { TProduct } from "../../interfaces/product";

export const cartState = atom({
  key: "cartState",
  default: [] as TProduct[],
});

