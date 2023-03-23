import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'react-bootstrap';
import { useParams } from 'react-router';
import SwitcherProfile from '../components/user/SwitcherProfile';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { userDataSlice } from '../store/reducers/users/UserDataSlice';
import { localhostUsers } from '../variables/server';

const MyAcc = () => {
    const [activeTab, setActiveTab] = useState('Профиль');
    const { user } = useAppSelector(state => state.userDataReducer);
    const dispatch = useAppDispatch();
    let { username } = useParams();

    useEffect(() => {
        const getUserInfo = async () => {
            const userInfoResponse = await axios.get(`${localhostUsers}/${username}`)
            dispatch(userDataSlice.actions.setUser(userInfoResponse.data));
        }
        getUserInfo();
    }, [])

    return (
        <div className='mt-4 mb-4'>
            <Container fluid>
                <Row>
                    <Col sm={3} md={2} className="d-none d-sm-block">
                    <Nav className="flex-column">
                        <NavItem>
                        <NavLink onClick={() => setActiveTab('Профиль')} disabled={activeTab === 'Профиль'}>Профиль</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink onClick={() => setActiveTab('Настройки аккаунта')} disabled={activeTab === 'Настройки аккаунта'}>Настройки аккаунта</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink onClick={() => setActiveTab('Настройки безопасности')} disabled={activeTab === 'Настройки безопасности'}>Настройки безопасности</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink onClick={() => setActiveTab('Мои заказы')} disabled={activeTab === 'Мои заказы'}>Мои заказы</NavLink>
                        </NavItem>
                    </Nav>
                    </Col>
                    <Col sm={9} md={10}>
                    {/* <h1>Личный кабинет маркетплейса</h1>
                    <p>Здесь вы можете управлять своим профилем, настройками, заказами и продуктами.</p> */}
                    <SwitcherProfile
                    activeTab={activeTab}/>
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default MyAcc;