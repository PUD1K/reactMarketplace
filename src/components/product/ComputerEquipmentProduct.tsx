import React from 'react';
import { IProduct } from '../../models/ProductInterface';
import { localhost } from '../../variables/server';

const Outfit = (props: {product: IProduct}) => {
    return (
        <div>
            <img 
                src={`${localhost}/${props.product.image}`} 
                width='250' 
                height='250' 
                alt=''
            />
            <h2>{props.product.name}</h2>
        </div>
    );
};

export default Outfit;