import { IUser } from "../../../models/UserInterface"
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UserState {
    user: IUser;
}

const initialState: UserState = {
    user: {
        id: -1,
        email: '',
        username: '',
        number: '',
        address: '',
        createdAt: '',
        updatedAt: '',
        roles: [],
        basket: []
    },
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>){
            state.user = action.payload;
        },
        setAddress(state, action: PayloadAction<string>){
            state.user.address = action.payload;
        }
    }
})

export default userDataSlice.reducer