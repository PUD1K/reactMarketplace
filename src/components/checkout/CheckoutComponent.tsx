import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import { useAppSelector } from '../../hooks/redux';
import BasketInfoCheckout from '../basket/BasketInfoCheckout';
import CheckoutInfo from './CheckoutInfo';
import CheckoutList from './CheckoutList';

const CheckoutComponent = () => {
    const { basketProducts } = useAppSelector(state => state.basketReducer);

    return (
        <div>
          <Container>
              <Row>
                <Col md={8}>
                  <h2>Оформление заказа</h2>
                  {basketProducts.length === 0 ? (
                    <p>Заказа нет.</p>
                  ) : (
                    <CheckoutList
                    basketProducts={basketProducts}
                    />
                  )}
                </Col>
                {/* <Col md={4} className='mb-2' style={{alignSelf: 'flex-end'}}> */}
                <Col md={4} className='mt-5'>
                  <Card>
                    <CheckoutInfo/>
                  </Card>
                </Col>
              </Row>
            </Container>
        </div>
      );
};

export default CheckoutComponent;