// src/redux/cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex((product) => product._id === action.payload._id);
      if (index !== -1) {
        state.total -= state.products[index].price * state.products[index].quantity;
        state.quantity -= 1;
        state.products.splice(index, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find((product) => product._id === action.payload._id);
      if (product) {
        product.quantity += 1;
        state.total += product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find((product) => product._id === action.payload._id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.total -= product.price;
      }
    }
  },
});

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
