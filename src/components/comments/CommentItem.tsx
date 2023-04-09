import React, {useState, useEffect} from 'react';
import { Form, Button, InputGroup, FormControl, ListGroup, Row, Col } from 'react-bootstrap';
import { IComment } from "../../models/CommentInterface";
import StarStatRating from './StarStatRating';
import StarRating from './StartRating';

interface commentProps{
    comment: IComment
}

interface ICalendar{
    0: string,
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
    6: string,
    7: string,
    8: string,
    9: string,
    10: string,
    11: string,
}

const CommentItem = ({comment} : commentProps) => {
    const [data, setData] = useState('')

    const replaceData = (data: string) => {
        const calendar: ICalendar = {
            0: 'Января',
            1: 'Февраля',
            2: 'Марта',
            3: 'Апреля',
            4: 'Мая',
            5: 'Июня',
            6: 'Июля',
            7: 'Августа',
            8: 'Сентября',
            9: 'Октября',
            10: 'Ноября',
            11: 'Декабря',
        }

        const year = data.substring(0,4);
        const monthNum = data.substring(5,7);
        let month = '';
        if(monthNum[0] === '0')
            month = calendar[monthNum[1] as unknown as keyof ICalendar];
        else    
            month = calendar[monthNum as unknown as keyof ICalendar];

        const day = data.substring(8,10);
        setData(`${day} ${month} ${year}`)
    }

    useEffect(() => {
        replaceData(comment.createdAt)
    }, [])

    return (
        <ListGroup.Item className='mt-2 mb-2' key={comment.id}>
            <Form className='w-50'>
                <Form.Group  controlId="rating">
                <Form.Label><strong>Оценка пользователя {comment.user.username}</strong></Form.Label>
                </Form.Group>
                <Form.Group className='mt-2' controlId="rating">
                <Row>
                    <Col>
                        <StarStatRating
                        totalRating={Number(comment.score)}
                        />
                        <span className='ms-3 text-secondary'>{data}</span>
                    </Col>
                </Row>
                </Form.Group>

                <Form.Group className='mb-2' controlId="rating">
                
                </Form.Group>
                <Form.Group controlId="pros">
                <Form.Label style={{fontSize:'1.05em', fontWeight: '500'}} className='text-secondary mt-2'>Достоинства</Form.Label>
                <p style={{wordBreak: 'break-all', overflowWrap: 'break-word', width: '100%', whiteSpace: 'pre-wrap', lineHeight: '1.5em'}}>
                    {comment.dignites}
                </p>
                </Form.Group>
                <Form.Group controlId="cons">
                <Form.Label style={{fontSize:'1.05em', fontWeight: '500'}} className='text-secondary mt-2'>Недостатки</Form.Label>
                <p style={{wordBreak: 'break-all', overflowWrap: 'break-word', width: '100%', whiteSpace: 'pre-wrap', lineHeight: '1.5em'}}>
                    {comment.disadvantages}
                </p>
                </Form.Group>
                <Form.Group controlId="comment">
                <Form.Label style={{fontSize:'1.05em', fontWeight: '500'}} className='text-secondary mt-2'>Комментарий</Form.Label>
                <p style={{wordBreak: 'break-all', overflowWrap: 'break-word', width: '100%', whiteSpace: 'pre-wrap', lineHeight: '1.5em'}}>
                    {comment.comment}
                </p>
                </Form.Group>
            </Form>
        </ListGroup.Item>
    );
};

export default CommentItem;