import axios from 'axios';
import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { localhost, localhostProduct } from '../../variables/server';
import OutfitProduct from './productComponentByType/OutfitProduct';

const SwitcherProducts = () => {
    const { product, selectedColor, selectedSize } = useAppSelector(state => state.productsReducer)
    const username = JSON.parse((localStorage.getItem('userData') || '{}')).username;


    const switchProduct = () => {
        console.log(product)
        if(product.subCategory.category.name === 'Одежда'){
            return <OutfitProduct/>
        }
    }

    
    const addToBasket = async () => {
        const addToBasketBody = {
            username,
            article: product.article,
            count: 1,
            color: selectedColor,
            size: selectedSize
        }
        console.log(addToBasketBody)
        const response = await axios.post(`${localhostProduct}/add_to_basket`, addToBasketBody)
        console.log(response.data)
    }

    return (
        <div>
            <div className='row mt-5 mb-5'>
                <div className='col-md-5 me-3'>
                    <img 
                        src={`${localhost}/${product.image}`} 
                        width='600' 
                        height='650' 
                        alt=''
                    />
                </div>
                <div className='col-md-5'>
                    {switchProduct()}
                    <button className="text-start btn btn-primary" type="submit" onClick={() => addToBasket()}>В корзину</button>
                </div>
            </div>
        </div>
    );
};

export default SwitcherProducts;