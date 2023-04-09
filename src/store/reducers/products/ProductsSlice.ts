import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../../models/ProductInterface";

interface ProductsState{
    products: IProduct[],
    totalPages: number,
    totalProducts: number
}

const initialState: ProductsState = {
    products: [],
    totalPages: 1,
    totalProducts: 0
}



export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<ProductsState>){
            // const response = await axios.get('http://localhost:7000/product/all')
            state.products = action.payload.products;
            state.totalPages = action.payload.totalPages;
            state.totalProducts = action.payload.totalProducts;
        }
    }
})

export default productsSlice.reducer
