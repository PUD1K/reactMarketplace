import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IBasket } from "../../../models/BasketInterface";
import { IProduct } from "../../../models/ProductInterface";

interface BasketProductsState{
    basketProducts: IBasket[]
}

const initialState: BasketProductsState = {
   basketProducts: []
}



export const basketSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setBasket(state, action){
            state.basketProducts = action.payload;
        },
        setCountBasket(state, action){
            let index = -1;
            state.basketProducts.map((i, ind) => {
                if(i.id === action.payload.id){
                    index = ind;
                }
            })
            console.log(action.payload)
            console.log(state.basketProducts)
            console.log(index)
            console.log(state.basketProducts[index])
            state.basketProducts[index].count = action.payload.count;
        },
        removeFromBasket(state, action){
            state.basketProducts = state.basketProducts.filter(i => 
                i.id !== action.payload.id
            );
        },
        clearBasket(state){
            state.basketProducts = [];
        }
    }
})

export default basketSlice.reducer
