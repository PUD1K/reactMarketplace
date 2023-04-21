import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { checkoutSlice } from '../../store/reducers/checkout/CheckoutsSlice';
import { localhostCheckout } from '../../variables/server';
import MyCheckoutsList from './MyCheckoutsList';

const MyCheckoutComponent = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.userDataReducer)
    const { checkouts } = useAppSelector(state => state.checkoutReducer);

    useEffect(() => {
        const getUserInfo = async () => {
            const checkoutsInfoResponse = await axios.get(`${localhostCheckout}/by_slug/${user.username}`)
            dispatch(checkoutSlice.actions.setCheckouts(checkoutsInfoResponse.data));
        }
        getUserInfo();
      }, [])

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h2>Мои заказы</h2>
                    {checkouts.length === 0 ? (
                    <p>Вы еще не сделали ни одного заказа.</p>
                    ) : (
                    <MyCheckoutsList
                    checkouts={checkouts}
                    />
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default MyCheckoutComponent;