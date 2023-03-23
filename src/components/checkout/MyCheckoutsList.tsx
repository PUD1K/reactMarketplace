import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import { useAppSelector } from '../../hooks/redux';
import { ICheckout } from '../../models/CheckoutInterface';
import MyCheckoutItem from './MyCheckoutItem';



const MyCheckoutsList = (props: {checkouts: ICheckout[]}) => {

    return (
        <ListGroup variant="flush">
        {props.checkouts.map((checkout) => (
                <MyCheckoutItem
                key={checkout.id}
                checkout={checkout}/>
        ))}
        </ListGroup>
    );
};

export default MyCheckoutsList;