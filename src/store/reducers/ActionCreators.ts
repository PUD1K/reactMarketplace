import { AppDispatch } from "../store";
import axios from 'axios'
import { IUser } from "../../models/UserInterface";
import { userDataSlice } from "./users/UserDataSlice";

export const getUserInfo = () => async (dispatch: AppDispatch) => {
    try{
        dispatch(userDataSlice.actions.setCurrentUser());
        const userId = 2;
        const apiUrl = `http://localhost:7000/users/${userId}`

        await axios.get<IUser>(apiUrl)
        .then(res => {
            const response = res.data;
            dispatch(userDataSlice.actions.setCurrentUserSuccess(response));
        })
        .catch(e => {
            dispatch(userDataSlice.actions.setCurrentUserError(e.message));
        })
    }
    catch(e){
        dispatch(userDataSlice.actions.setCurrentUserError((e as Error).message));
    }
}
