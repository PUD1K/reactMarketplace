import React, {useCallback} from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { IBasket } from '../../models/BasketInterface';
import { IProduct } from '../../models/ProductInterface';
import { localhost } from '../../variables/server';
import OptionalProperties from '../basket/OptionalProperties';

interface BasketProps{
    item: IBasket;
}

const CheckoutItem = ({item} : BasketProps) => {
    const navigate = useNavigate()
    const username = JSON.parse((localStorage.getItem('userData') || '{}')).username;
  
    const navigateTo = useCallback((product: IProduct) => {
      const to = `/${product.article}`;
      navigate(to);
    },[navigate])

    return (
        <ListGroup.Item key={item.id}>
            <Row>
                <Col md={2}>
                    <img
                    src={`${localhost}/${item.product.image}`}
                    className="img-fluid"
                    alt={item.product.name}
                    onClick={() => navigateTo(item.product)}
                    style={{cursor: "pointer"}}
                    />
                </Col>
                <Col md={3}>
                    <p>{item.product.name}</p>
                    <OptionalProperties
                    item={item}
                    />
                </Col>
                <Col md={2}>
                    {item.product.price} ₽
                </Col> 
            </Row>
        </ListGroup.Item>
    );
};

export default CheckoutItem;