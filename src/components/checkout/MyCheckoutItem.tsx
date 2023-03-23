import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import { ICheckout } from '../../models/CheckoutInterface';
import MyCheckoutProduct from './MyCheckoutProduct';

const MyCheckoutItem = (props: {checkout: ICheckout}) => {
    return (
        <div>
            <p>Сумма: {props.checkout.totalSum}</p>
            <p>Адрес: {props.checkout.address}</p>
            <p>Дата заказа: {props.checkout.createdAt}</p>

            <ListGroup variant="flush">
              {props.checkout.CheckoutBasketProducts.map((checkoutBasketProduct) => (
                <MyCheckoutProduct
                key={checkoutBasketProduct.id}
                basketProduct={checkoutBasketProduct.basketProduct}/>
              ))}
            </ListGroup>
        </div>
    );
};

export default MyCheckoutItem;