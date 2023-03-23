import React, { useCallback } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import { useNavigate } from 'react-router';
import { IBasketProduct } from '../../models/BasketProductInterface';
import { IProduct } from '../../models/ProductInterface';
import { localhost } from '../../variables/server';
import MyCheckoutOptionalProperties from './MyCheckoutOptionalProperties';

const MyCheckoutProduct = (props: {basketProduct: IBasketProduct}) => {
    const navigate = useNavigate();

    const navigateTo = useCallback((product: IProduct) => {
        const to = `/${product.article}`;
        navigate(to);
      },[navigate])

    return (
        <ListGroup.Item key={props.basketProduct.product.id}>
            <Row>
                <Col md={2}>
                    <img
                    src={`${localhost}/${props.basketProduct.product.image}`}
                    className="img-fluid"
                    alt={props.basketProduct.product.name}
                    onClick={() => navigateTo(props.basketProduct.product)}
                    style={{cursor: "pointer"}}
                    />
                </Col>
                <Col md={3}>
                    <p>{props.basketProduct.product.name}</p>
                    <MyCheckoutOptionalProperties
                    basketProduct={props.basketProduct}
                    />
                </Col>
                <Col md={2}>
                    {props.basketProduct.product.price} ₽
                </Col> 
            </Row>
        </ListGroup.Item>
    );
};

export default MyCheckoutProduct;