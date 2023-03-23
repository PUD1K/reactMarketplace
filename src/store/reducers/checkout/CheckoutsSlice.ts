import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IBasket } from "../../../models/BasketInterface";
import { ICheckout } from "../../../models/CheckoutInterface";
import { IProduct } from "../../../models/ProductInterface";

interface CheckoutState{
    checkouts: ICheckout[]
}

const initialState: CheckoutState = {
    checkouts: []
}



export const checkoutSlice = createSlice({
    name: 'checkouts',
    initialState,
    reducers: {
        setCheckouts(state, action){
            state.checkouts = action.payload;
        }
    }
})

export default checkoutSlice.reducer
