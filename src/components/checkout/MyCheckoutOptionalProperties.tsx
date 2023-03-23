import React from 'react';
import { IBasketProduct } from '../../models/BasketProductInterface';

const MyCheckoutOptionalProperties = (props: {basketProduct : IBasketProduct}) => {
    return (
        <div>
            {
                !!props.basketProduct.Size 
            ?
                <p><span className="text-secondary">Размер: </span> {props.basketProduct.Size.size}</p>
            :   <></>
            }
            {
                !!props.basketProduct.color 
            ?
                <p><span className="text-secondary">Цвет: </span> {props.basketProduct.color.color}</p>
            :   <></>
            }
        </div>
    );
};


export default MyCheckoutOptionalProperties;