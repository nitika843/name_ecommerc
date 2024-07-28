import { createSlice } from "@reduxjs/toolkit";
import ProductCart from "./component/ProductCart"
import ProductData from "../component/ProductData";

const initialState = {
  cart: {},
  items: ProductData,
  totalQuantiy: 0,
  totalPrice:0,
};

export const cartslice = cartslice({
  name: "cart",
  initialState,
  reducers: {},
});
