import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useAppSelector } from '../../hooks/redux';

const ProfileInfo = () => {
    const { user } = useAppSelector(state => state.userDataReducer)

    return (
        <div>
            <h1>Карта пользователя</h1>
                <Col md={6}>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <p><strong>Имя:</strong> {user.username}</p>
                            <p><strong>Номер телефона:</strong> {user.number}</p>
                            <p><strong>Электронная почта:</strong> {user.email}</p>
                            <p><strong>Адрес:</strong> {user.address}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
        </div>
    );
};

export default ProfileInfo;