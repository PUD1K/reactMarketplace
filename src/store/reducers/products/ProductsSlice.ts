import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../../models/ProductInterface";

interface ProductsState{
    products: IProduct[]
}

const initialState: ProductsState = {
    products: []
}



export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts(state, action){
            // const response = await axios.get('http://localhost:7000/product/all')
            state.products.push(action.payload);
        },
        clearErrors(state){
            state.products = [];
        }
    }
})

export default productsSlice.reducer
