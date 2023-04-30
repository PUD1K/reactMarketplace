import React, { useEffect } from 'react';
import MyCheckoutsList from '../../checkout/MyCheckoutsList';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import ShopCheckoutsList from '../chekouts/ShopCheckoutsList';
import { checkoutSlice } from '../../../store/reducers/checkout/CheckoutsSlice';
import axios from 'axios';
import { localhostCheckout } from '../../../variables/server';

const ManagmentOrders = () => {
    const { shop } = useAppSelector(state => state.shopDataReducer);
    const { checkouts } = useAppSelector(state => state.checkoutReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getUserInfo = async () => {
            const checkoutsInfoResponse = await axios.get(`${localhostCheckout}/for_shop/${shop.slug}`)
            dispatch(checkoutSlice.actions.setCheckouts(checkoutsInfoResponse.data));
        }
        getUserInfo();
      }, [])

    return (
        <div>
            <ShopCheckoutsList
            checkouts={checkouts}
            />
        </div>
    );
};

export default ManagmentOrders;