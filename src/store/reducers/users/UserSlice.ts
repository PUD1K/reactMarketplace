import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    isLoggedIn: boolean;
    token: string;
}

const initialState: UserState = {
    isLoggedIn: false,
    token: JSON.parse(localStorage.getItem('token')|| '{}')
}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoggedIn(state){
            const isLogged = () => {
                const token = JSON.parse((localStorage.getItem('token') || '{}'));
                return !!token && Object.keys(token).length !== 0;
            };
            state.isLoggedIn = isLogged();
        }
    }
})

export default userSlice.reducer