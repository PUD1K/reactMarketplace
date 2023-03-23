import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../../models/ProductInterface";

interface ProductsState{
    product: IProduct,
    selectedSize: string,
    selectedColor: string
}

const initialState: ProductsState = {
    product: {
        id: -1,
        name: '',
        description: '',
        manufacturer: '',
        count: '',
        article: '',
        price: 0,

        volume: '',
        sctructure: '',
        color: '',
        size: '',
        material: '',
        country: '',
        configuration: '',
        cpu: '',
        gpu: '',
        ram: '',
        matrix: '',
        diagonal: '',
        image: '',
        subCategory: {
            id: 0,
            name: '',
            slug: '',
            description: '',
            image: '',
            createdAt: '',
            updatedAt: '',
            category:{
                name: '',
                slug: '',
                image: '',
                subCategories: [],
                shop: {
                    id: 0,
                    name: '',
                    slug: '',
                    description: '',
                    image: '',
                    createdAt: '',
                    updatedAt: ''
                }
            }
        },
        shop: {
            id: 0,
            name: '',
            slug: '',
            description: '',
            image: '',
            createdAt: '',
            updatedAt: ''
        }
    },
    selectedSize: '',
    selectedColor: ''
}



export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts(state, action){
            // const response = await axios.get('http://localhost:7000/product/all')
            state.product = action.payload;
        },
        clearErrors(state){
            // state.product = [];
        },
        setProduct(state, action){
            state.product = action.payload;
        },
        setSize(state, action){
            state.selectedSize = action.payload;         
        },
        setColor(state, action){
            state.selectedColor = action.payload;         
        }
    }
})

export default productsSlice.reducer
