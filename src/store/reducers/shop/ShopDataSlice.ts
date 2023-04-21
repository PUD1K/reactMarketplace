import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { IShop } from '../../../models/ShopInterface';
import { ICategory } from '../../../models/CategoryInterface';

interface Rating {
    shop: IShop;
}

const initialState: Rating = {
    shop: {
        id: 0,
        name: '',
        slug: '',
        description: '',
        image: '',
        createdAt: '',
        updatedAt: '',
        categories: [],
        products: [],
        users: []
    }
}

export const shopDataSlice = createSlice({
    name: 'ratingData',
    initialState,
    reducers: {
        setShop(state, action: PayloadAction<IShop>){
            state.shop = action.payload;
        },
        addCategory(state, action: PayloadAction<ICategory>){
            state.shop.categories.push(action.payload)
        }
    }
})

export default shopDataSlice.reducer