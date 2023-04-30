import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { basketSlice } from '../../store/reducers/baskets/BasketSlice';
import { userDataSlice } from '../../store/reducers/users/UserDataSlice';
import { localhostBasket, localhostCheckout, localhostUsers } from '../../variables/server';

const CheckoutInfo = () => {
    const { basketProducts } = useAppSelector(state => state.basketReducer);
    const { user } = useAppSelector(state => state.userDataReducer);
    const { username } = useParams();
    const dispatch = useAppDispatch();

    const navigate = useNavigate()

    useEffect(() => {
        const getUserInfo = async () => {
            const userInfoResponse = await axios.get(`${localhostUsers}/${username}`)
            dispatch(userDataSlice.actions.setUser(userInfoResponse.data));
        }
        getUserInfo();
      }, [])

    const createCheckout = async () =>{
        const basketProductsId = basketProducts.map(basketProduct => basketProduct.id);
        const firstShopSlug = basketProducts[0].product.shop.slug;
  
        const createCheckoutBody = {
          address: user.address,
          userId: user.id,
          username: user.username,
          shopSlug: firstShopSlug,
          basketProductsId: basketProductsId
        }
        const createCheckouteResponse = await axios.post(`${localhostCheckout}`, createCheckoutBody);
        const clearBasket = await axios.post(`${localhostBasket}/clear`, {username: user.username})
        dispatch(basketSlice.actions.clearBasket());
        navigate(`/success_checkout/${username}`);
    }

    return (
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>
                  Всего ({basketProducts.reduce((acc, item) => acc + item.count, 0)}
                  ) товаров
                </h3>
                {basketProducts.reduce((acc, item) => acc + item.count * item.product.price, 0)} ₽
              </ListGroup.Item>
              <ListGroup.Item>
                <input
                    type="text"
                    className="form-control"
                    value={user.address}
                    onChange={(e) => dispatch(userDataSlice.actions.setAddress(e.target.value))}
                    id="floatingAddress"
                    placeholder="Адрес"
                  />
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={basketProducts.length === 0}
                  onClick={() => createCheckout()}
                >
                  Оформить заказ
                </Button>
              </ListGroup.Item>
            </ListGroup>
    );
};

export default CheckoutInfo;