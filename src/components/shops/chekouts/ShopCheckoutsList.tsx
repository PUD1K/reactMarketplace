import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import { ICheckout } from '../../../models/CheckoutInterface';
import ShopCheckoutItem from './ShopCheckoutItem';

const ShopCheckoutsList = (props: {checkouts: ICheckout[]}) => {

    return (
        <ListGroup variant="flush">
        {props.checkouts.map((checkout) => (
                <ShopCheckoutItem
                key={checkout.id}
                checkout={checkout}/>
        ))}
        </ListGroup>
    );
};

export default ShopCheckoutsList;