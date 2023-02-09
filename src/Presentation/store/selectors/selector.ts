import { selector } from "recoil";
import { cartState } from "../atoms/atom";

export const selectorGetItems = selector({
  key: "selectorGetItems",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart;
  }
});