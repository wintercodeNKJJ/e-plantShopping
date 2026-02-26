import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // payload should be an object representing a product (name, image, cost, etc.)
      const incoming = action.payload;
      const existing = state.items.find((item) => item.name === incoming.name);
      if (existing) {
        // if already in cart, just bump the quantity
        existing.quantity += 1;
      } else {
        // add new item with quantity defaulting to 1
        state.items.push({ ...incoming, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // payload may be the product name or an object with name
      const name = action.payload?.name || action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },
    updateQuantity: (state, action) => {
      // payload should contain { name, quantity }
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);
      if (item) {
        // ensure quantity is at least 1
        item.quantity = quantity >= 1 ? quantity : 1;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
