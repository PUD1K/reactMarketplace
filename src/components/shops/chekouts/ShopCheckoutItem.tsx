import React, { FormEvent, useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import MyCheckoutProduct from '../../checkout/MyCheckoutProduct';
import { ICheckout } from '../../../models/CheckoutInterface';
import { localhostCheckout } from '../../../variables/server';
import axios from 'axios';
import { parseDate } from '../../../middleware/parseDate';

enum statuses {
    START_DELIVERY = 'Передано в доставку',
    IN_A_WAY = 'В пути',
    END_DELIVERY = 'Товар доставлен',
    REJECTION = 'Отказ'
}

const ShopCheckoutItem = (props: {checkout: ICheckout}) => {

    const [checkoutStatus, setCheckoutStatus] = useState(props.checkout.status);

    const changeStatus = async () => {
        const checkoutId = props.checkout.id;
        const changeCheckoutStatusResponse = await axios.post(`${localhostCheckout}/change_status`, {checkoutId, status: checkoutStatus});
        console.log(changeCheckoutStatusResponse)
    }

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
                <div className='mb-3'>
                <p className="font-weight-bold"><strong>Статус:</strong></p>
                {/* <p>{props.checkout.status}</p> */}
                
                <select
                className='form-select'
                style={{width: '250px'}}
                value={checkoutStatus}
                onChange={(e: FormEvent) =>setCheckoutStatus((e.target as HTMLInputElement).value)}
                >
                    {Object.values(statuses).map(status => {
                        return <option value={status}>{status}</option>
                    })}
                </select>
                </div>
                <div className='mb-2'>
                    <button className="btn btn-primary" onClick={() => changeStatus()}>
                        Сохранить
                    </button>
                </div>
            </Col>
          </Row>
        </ListGroup.Item>
      </div>
    );
};

export default ShopCheckoutItem;