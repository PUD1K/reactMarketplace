import React, { useEffect } from 'react';
import MyCheckoutsList from '../../checkout/MyCheckoutsList';
import { useAppSelector } from '../../../hooks/redux';

const ManagmentOrders = () => {
    const { checkouts } = useAppSelector(state => state.checkoutReducer);

    // useEffect(() => {
    //     const getUserInfo = async () => {
    //         const checkoutsInfoResponse = await axios.get(`${localhostCheckout}/${user.username}`)
    //         dispatch(checkoutSlice.actions.setCheckouts(checkoutsInfoResponse.data));
    //     }
    //     getUserInfo();
    //   }, [])

    return (
        <div>
            <h1>ЗАКАЗЫ</h1>
            <MyCheckoutsList
            checkouts={checkouts}
            />
        </div>
    );
};

export default ManagmentOrders;