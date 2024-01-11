import { atom } from "recoil";

export const productListState = atom({
  key: "productList",
  default: [
    { id: 1, price: 150000, title: "Áo thun Nam" },
    { id: 2, price: 170000, title: "Áo thun Nữ" },
    { id: 3, price: 180000, title: "Áo khoác thời trang Nam" },
    { id: 4, price: 190000, title: "Áo khoác thời trang Nữ" },
  ],
});
