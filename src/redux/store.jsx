import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './Slice.jsx'

const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})

export default store;