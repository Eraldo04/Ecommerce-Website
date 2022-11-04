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
    deleteProduct:(state, action) => {
      const nextCart = state.products.filter(
        (product) => product._id !== action.payload._id
      )
      state.products = nextCart;
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
    },
    deleteAllProduct:(state) => {
      state.quantity = 0;
      state.total = 0;
      state.products = [];
    }
  },
});

export const { addProduct, deleteProduct, deleteAllProduct } = cartSlice.actions;
export default cartSlice.reducer;
