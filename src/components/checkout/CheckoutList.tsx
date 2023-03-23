import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { IBasket } from '../../models/BasketInterface';
import BasketItem from '../basket/BasketItem';
import CheckoutItem from './CheckoutItem';


const CheckoutList = (props: {basketProducts: IBasket[]}) => {
    const canChanged = false

    return (
        <div>
            <ListGroup variant="flush">
              {props.basketProducts.map((item) => (
                <CheckoutItem
                key={item.id}
                item={item}/>
              ))}
            </ListGroup>
        </div>
    );
};

export default CheckoutList;