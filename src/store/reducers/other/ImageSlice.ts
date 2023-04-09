import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState{
    image: Blob | null,
}

const initialState: ImageState = {
    image: null
}

export const uploadImage = createAsyncThunk(
    'imageProperty/uploadImage',
    async (image: Blob) => {
        return image
    }
)

export const imageSlice = createSlice({
    name: 'imageProperty',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(uploadImage.fulfilled, (state, action) => {
            state.image = action.payload
        })
    }
})

export default imageSlice.reducer
