import React, { useCallback } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SuccessCheckout = () => {
    const navigate = useNavigate();

    const navigateTo = useCallback(() => {
        const to = `/`;
        navigate(to);
      },[navigate])

    return  (
        <div className="mt-5 mb-5">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <Alert variant="success">
                        <h4>Ваш заказ успешно оформлен!</h4>
                        <p>Мы свяжемся с вами в ближайшее время.</p>
                    </Alert>
                    <div className="text-center">
                        <Button onClick={() => navigateTo()} variant="primary">Перейти к покупкам</Button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SuccessCheckout;