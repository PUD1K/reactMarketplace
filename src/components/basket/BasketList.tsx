import React, { useCallback } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import { useNavigate } from 'react-router';
import { IBasket } from '../../models/BasketInterface';
import { IProduct } from '../../models/ProductInterface';
import { localhost } from '../../variables/server';
import BasketItem from './BasketItem';

const BasketList = (props: {basketProducts: IBasket[]}) => {
    return (
        <div>
            <ListGroup variant="flush">
              {props.basketProducts.map((item) => (
                <BasketItem
                key={item.id}
                item={item}/>
              ))}
            </ListGroup>
        </div>
    );
};

export default BasketList;