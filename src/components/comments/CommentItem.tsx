import React, {useState, useEffect} from 'react';
import { Form, Button, InputGroup, FormControl, ListGroup, Row, Col } from 'react-bootstrap';
import { IComment } from "../../models/CommentInterface";
import StarStatRating from './StarStatRating';
import StarRating from './StartRating';
import { parseDate } from '../../middleware/parseDate';

interface commentProps{
    comment: IComment
}

const CommentItem = ({comment} : commentProps) => {
    const [data, setData] = useState('')

    useEffect(() => {
        // replaceData(comment.createdAt)
        setData(parseDate(comment.createdAt))
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
                        <span className='ms-3 text-secondary' style={{verticalAlign:'bottom'}}>{data}</span>
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