import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import CheckoutComponent from '../components/checkout/CheckoutComponent';
import { useAppDispatch } from '../hooks/redux';
import { basketSlice } from '../store/reducers/baskets/BasketSlice';
import { localhostBasket } from '../variables/server';

const Checkout = () => {
    const {username} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getAllProducts = async () => {
            const allProductssResponse = await axios.get(`${localhostBasket}/${username}`)
            dispatch(basketSlice.actions.setBasket(allProductssResponse.data));
        }
        getAllProducts();
    }, [username]);

    return (
        <div className='mt-3 mb-3'>
            <CheckoutComponent
            />
        </div>
    );
};

export default Checkout;

