import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {},
    clearCart: (state)=>{
    state = []
    }
  },
});

export const {addItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer