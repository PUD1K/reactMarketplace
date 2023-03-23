import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import BasketComponent from '../components/basket/BasketComponent';
import LoadingSpinner from '../components/customElements/MyLoadingSpinner';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IBasket } from '../models/BasketInterface';
import { basketSlice } from '../store/reducers/baskets/BasketSlice';
import { localhostBasket } from '../variables/server';

const Basket = () => {
    // const [basket, setBasket] = useState<IBasket[]>([])
    const { basketProducts } = useAppSelector(state => state.basketReducer);
    const dispatch = useAppDispatch();
    let { username } = useParams();

    useEffect(() => {
        const getAllProducts = async () => {
            const allProductssResponse = await axios.get(`${localhostBasket}/${username}`)
            dispatch(basketSlice.actions.setBasket(allProductssResponse.data));
        }
        getAllProducts();
    }, [username]);

    return (
        <div>
            {
                // basketProducts.length
                true
                ?
                <div className='mt-3 mb-3'>
                    <BasketComponent
                    />
                </div>
                :
                    <LoadingSpinner/>
            }
        </div>
    );
};

export default Basket;