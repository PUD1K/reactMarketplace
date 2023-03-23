import axios from 'axios';
import React, {useState, FormEvent} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IUser } from '../../models/UserInterface';
import { userDataSlice } from '../../store/reducers/users/UserDataSlice';
import { localhostUsers } from '../../variables/server';

const ProfileSetting = () => {
    const { user } = useAppSelector(state => state.userDataReducer)
    const dispatch = useAppDispatch();

    const [updatedPhone, setUpdatedPhone] = useState(user.number);
    const [updatedEmail, setUpdatedEmail] = useState(user.email);
    const [updatedAddress, setUpdatedAddress] = useState(user.address);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // Здесь можно выполнить отправку данных формы на сервер
        const userDataToUpdate = {
            username: user.username,
            number: updatedPhone,
            email: updatedEmail,
            address: updatedAddress
        }

        const updateUserInfoResponse = await axios.post<IUser>(`${localhostUsers}/update_data`, userDataToUpdate);
        dispatch(userDataSlice.actions.setUser(updateUserInfoResponse.data));
      };

    return (
        <div>
            <h1>Настройки аккаунта</h1>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                        <Form.Label>Телефон</Form.Label>
                        <Form.Control
                            style={{ width: '70%' }}
                            type="tel"
                            value={updatedPhone}
                            onChange={(event) => setUpdatedPhone(event.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            style={{ width: '70%' }}
                            type="email"
                            value={updatedEmail}
                            onChange={(event) => setUpdatedEmail(event.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="formAddress">
                        <Form.Label>Адрес</Form.Label>
                        <Form.Control
                            style={{ width: '70%' }}
                            type="text"
                            value={updatedAddress}
                            onChange={(event) => setUpdatedAddress(event.target.value)}
                        />
                        </Form.Group>
                        <Button className='mt-4' variant="primary" type="submit">
                        Сохранить изменения
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProfileSetting;