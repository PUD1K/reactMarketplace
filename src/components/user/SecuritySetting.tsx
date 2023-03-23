import axios, { AxiosError } from 'axios';
import React, {FormEvent, useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { errorsSlice } from '../../store/reducers/errors/ErrorsSlice';
import { localhostAuth } from '../../variables/server';


const SecuritySetting = () => {
    const { user } = useAppSelector(state => state.userDataReducer)
    const dispatch = useAppDispatch()

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // Здесь можно выполнить отправку данных формы на сервер

        if(newPassword !== repeatNewPassword){
            dispatch(errorsSlice.actions.addError('Пароли не совпадают'));
            return;
        }

        try{
            const userPasswordToUpdate = {
                username: user.username,
                currentPassword,
                newPassword
            }

            const updatedPasswordResponse = await axios.post(`${localhostAuth}/update_password`, userPasswordToUpdate);
            setCurrentPassword('');
            setNewPassword('');
            setRepeatNewPassword('');
        } catch(e) {
            if(e instanceof AxiosError){
                const errorMessage = e.response?.data?.message
                dispatch(errorsSlice.actions.addError(errorMessage));
              }
        }

      };

    return (
        <div>
            <h1>Настройки безопасности</h1>
             <Container>
                <Row>
                    <Col xs={12} md={8}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formCurrentPassword">
                        <Form.Label>Текущий пароль</Form.Label>
                        <Form.Control
                            style={{ width: '70%' }}
                            type="password"
                            value={currentPassword}
                            onChange={(event) => setCurrentPassword(event.target.value)}
                        />
                        </Form.Group>

                        <Form.Group controlId="formNewPassword">
                        <Form.Label>Новый пароль</Form.Label>
                        <Form.Control
                            style={{ width: '70%' }}
                            type="password"
                            value={newPassword}
                            onChange={(event) => setNewPassword(event.target.value)}
                        />
                        </Form.Group>

                        <Form.Group controlId="formRepeatNewPassword">
                        <Form.Label>Повторите новый пароль</Form.Label>
                        <Form.Control
                            style={{ width: '70%' }}
                            type="password"
                            value={repeatNewPassword}
                            onChange={(event) => setRepeatNewPassword(event.target.value)}
                        />
                        </Form.Group>

                        <Button className='mt-4' variant="primary" type="submit">
                        Изменить пароль
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SecuritySetting;