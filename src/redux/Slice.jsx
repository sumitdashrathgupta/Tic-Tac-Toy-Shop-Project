import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartCount: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.cartItems.find(item => item.id === product.id);
            if (!existingItem) {
                state.cartItems.push(product);
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            state.cartCount = state.cartItems.length;
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.cartCount = 0;
        },
         updateCartCount: (state, action) => {
            state.cartCount = action.payload;
        }
    }
});

export const { addToCart, removeFromCart, clearCart,updateCartCount } = cartSlice.actions;
export default cartSlice.reducer;
