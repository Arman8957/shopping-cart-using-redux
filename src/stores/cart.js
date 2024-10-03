import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [],
  statusTab: false,
};

const carteSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId > 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },

    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        delete state.items[indexProductId];
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    toggleStatusTab(state, action) {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    },
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = carteSlice.actions;
export default carteSlice.reducer;
