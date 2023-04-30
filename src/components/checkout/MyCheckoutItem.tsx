import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import { ICheckout } from '../../models/CheckoutInterface';
import MyCheckoutProduct from './MyCheckoutProduct';
import { parseDate } from '../../middleware/parseDate';

const MyCheckoutItem = (props: {checkout: ICheckout}) => {
    return (
      <div>
        <ListGroup.Item>
          <ListGroup variant="flush">
            {props.checkout.CheckoutBasketProducts.map((checkoutBasketProduct) => (
              <MyCheckoutProduct
              key={checkoutBasketProduct.id}
              basketProduct={checkoutBasketProduct.basketProduct}/>
            ))}
          </ListGroup>

          <hr/>
          <Row>
            <Col>
              <p className="font-weight-bold"><strong>Сумма</strong></p>
              <p>{props.checkout.totalSum} ₽</p>
            </Col>
            <Col>
              <p className="font-weight-bold"><strong>Адрес</strong></p>
              <p>{props.checkout.address}</p>
            </Col>
            <Col>
              <p className="font-weight-bold"><strong>Дата заказа:</strong></p>
              <p>{parseDate(props.checkout.createdAt)}</p>
            </Col>
            <Col>
              <p className="font-weight-bold"><strong>Статус:</strong></p>
              <p>{props.checkout.status}</p>
            </Col>
          </Row>
        </ListGroup.Item>
      </div>
    );
};

export default MyCheckoutItem;