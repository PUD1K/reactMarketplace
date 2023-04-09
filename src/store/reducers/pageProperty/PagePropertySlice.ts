import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../../models/ProductInterface";

interface PagePropertyState{
    curPage: number,
    sorting: string
}

const initialState: PagePropertyState = {
    curPage: 1,
    sorting: 'popular'
}



export const pagePropertySlice = createSlice({
    name: 'pageProperty',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>){
            state.curPage = action.payload
        },
        setSorting(state, action: PayloadAction<string>){
            state.sorting = action.payload
        }
    }
})

export default pagePropertySlice.reducer
