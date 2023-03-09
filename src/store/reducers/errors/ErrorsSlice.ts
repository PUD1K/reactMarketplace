import { createSlice } from "@reduxjs/toolkit";

interface ErrorsState {
    errors: string[]
}

const initialState: ErrorsState = {
    errors: []
}



export const errorsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addError(state, action){
            state.errors.push(action.payload);
        },
        clearErrors(state){
            state.errors = [];
        }
    }
})

export default errorsSlice.reducer