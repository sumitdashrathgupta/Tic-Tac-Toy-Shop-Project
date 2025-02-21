import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: "cart",
    initialState: {count: 0},
    reducers: {
        addToCart: (state)=>{
            state.count+=1
        }
    }
});

export const {addToCart} = Slice.actions;
export default Slice.reducer;