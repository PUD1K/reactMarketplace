import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import { IBasket } from "../../models/BasketInterface";
import { IProduct } from "../../models/ProductInterface";
import { localhost, localhostProduct } from "../../variables/server";
import {useCallback} from 'react'
import { useNavigate } from "react-router";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { basketSlice } from "../../store/reducers/baskets/BasketSlice";
import BasketList from "./BasketList";
import BasketInfoCheckout from "./BasketInfoCheckout";

const BasketComponent = () => {
  const { basketProducts } = useAppSelector(state => state.basketReducer);
  const dispatch = useAppDispatch();

  const navigate = useNavigate()
  const username = JSON.parse((localStorage.getItem('userData') || '{}')).username;

  return (
    <div>
      <Container>
          <Row>
            <Col md={8}>
              <h2>Корзина</h2>
              {basketProducts.length === 0 ? (
                <p>Ваша корзина пуста.</p>
              ) : (
                <BasketList
                basketProducts={basketProducts}
                />
              )}
            </Col>
            {/* <Col md={4} className='mb-2' style={{alignSelf: 'flex-end'}}> */}
            <Col md={4} className='mt-5'>
              <Card>
                <BasketInfoCheckout/>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default BasketComponent;
