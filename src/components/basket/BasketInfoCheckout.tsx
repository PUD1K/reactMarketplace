import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Form, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IProduct } from '../../models/ProductInterface';
import { userDataSlice } from '../../store/reducers/users/UserDataSlice';
import { localhostCheckout, localhostUsers } from '../../variables/server';

const BasketInfoCheckout = () => {
    const { basketProducts } = useAppSelector(state => state.basketReducer);

    const { user } = useAppSelector(state => state.userDataReducer);
    const dispatch = useAppDispatch();

    const navigate = useNavigate()
    const { username } = useParams();
  
    const navigateTo = useCallback(() => {
      const to = `/checkout/${username}`;
      navigate(to);
    },[username, navigate])

    return (
        <div>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>
                  Всего ({basketProducts.reduce((acc, item) => acc + item.count, 0)}
                  ) товаров
                </h3>
                {basketProducts.reduce((acc, item) => acc + item.count * item.product.price, 0)} ₽
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={basketProducts.length === 0}
                  onClick={() => navigateTo()}
                >
                  Оформить заказ
                </Button>
              </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default BasketInfoCheckout;

