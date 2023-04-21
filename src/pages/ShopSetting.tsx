import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useParams } from 'react-router';
import axios from 'axios';
import { localhostShop, localhostUsers } from '../variables/server';
import { userDataSlice } from '../store/reducers/users/UserDataSlice';
import { Col, Container, Nav, NavItem, Row, NavLink} from 'react-bootstrap';
import SwitcherShopSetting from '../components/shops/SwitcherShopSetting';
import { shopDataSlice } from '../store/reducers/shop/ShopDataSlice';
import { IUser } from '../models/UserInterface';

const ShopSetting = () => {
  const [activeTab, setActiveTab] = useState('Категории');
  const dispatch = useAppDispatch();
  const { shop } = useAppSelector(state => state.shopDataReducer);

  const username = JSON.parse((localStorage.getItem('userData') || '{}')).username;

  useEffect(() => {
      const getUserInfo = async () => {
          const userDataResponse = await axios.get<IUser>(`${localhostUsers}/${username}`)
          const shop = userDataResponse.data.shop;
          const shopDataResponse = await axios.get(`${localhostShop}/by_slug/${shop.slug}`)
          dispatch(shopDataSlice.actions.setShop(shopDataResponse.data));
      }
      getUserInfo();
  }, [])

  return (
      <div className='mt-4 mb-4'>
          <div className='ms-4'>
            <h1>Настройки магазина {shop.name}</h1>
          </div>
          <div className='mt-4'>
            <Container fluid>
                <Row>
                    <Col sm={3} md={2} className="d-none d-sm-block">
                    <Nav className="flex-column">
                        <NavItem>
                        <NavLink onClick={() => setActiveTab('Категории')} disabled={activeTab === 'Категории'}>Категории</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink onClick={() => setActiveTab('Товары')} disabled={activeTab === 'Товары'}>Товары</NavLink>
                        </NavItem>
                    </Nav>
                    </Col>
                    <Col sm={9} md={10}>
                    {/* <h1>Личный кабинет маркетплейса</h1>
                    <p>Здесь вы можете управлять своим профилем, настройками, заказами и продуктами.</p> */}
                    <SwitcherShopSetting
                    activeTab={activeTab}/>
                    </Col>
                </Row>
            </Container >
          </div>
      </div>
  );
};

export default ShopSetting;