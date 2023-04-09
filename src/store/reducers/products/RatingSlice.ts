import { IUser } from "../../../models/UserInterface"
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Rating {
    rate: number;
}

const initialState: Rating = {
    rate: 0
}

export const ratingDataReducer = createSlice({
    name: 'ratingData',
    initialState,
    reducers: {
        setRating(state, action: PayloadAction<number>){
            state.rate = action.payload;
        }
    }
})

export default ratingDataReducer.reducer