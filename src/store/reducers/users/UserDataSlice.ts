import { IUser } from "../../../models/UserInterface"
import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface UsersState {
    currentUser: UserState;
    users: [];
    isLoading: boolean;
    error: string;
}


interface UserState {
    user: IUser;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: {
        id: -1,
        email: '',
        username: '',
        createdAt: '',
        updatedAt: '',
        roles: [],
        basket: {
            id: -1,
            userId: -1,
            createdAt: '',
            updatedAt: '',
        }
    },
    isLoading: false,
    error: ''
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setCurrentUser(state){
            state.isLoading = true;
        },
        setCurrentUserSuccess(state, action: PayloadAction<IUser>){
            state.user = action.payload;
            state.error = ''
            state.isLoading = false;
        },
        setCurrentUserError(state, action: PayloadAction<string>){
            state.error = action.payload;
            state.isLoading = false;
        },
    }
})

export default userDataSlice.reducer