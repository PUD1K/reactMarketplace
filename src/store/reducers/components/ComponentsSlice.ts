import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../models/ProductInterface";

interface ProductsState{
    showCanvas: boolean;
}

const initialState: ProductsState = {
    showCanvas: false
}



export const componentsSlice = createSlice({
    name: 'componentsProperty',
    initialState,
    reducers: {
        setShowCanvas(state){
            state.showCanvas = true;
        },
        setHideCanvas(state){
            state.showCanvas = false;
        }
    }
})

export default componentsSlice.reducer
