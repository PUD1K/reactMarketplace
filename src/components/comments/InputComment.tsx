import axios from 'axios';
import React, { useState, FormEvent, useCallback, useEffect } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ratingDataReducer } from '../../store/reducers/products/RatingSlice';
import { localhostComment } from '../../variables/server';
import StarRating from './StartRating';

const InputComment = () => {
  const navigate = useNavigate();
  
  const { rate } = useAppSelector(state => state.ratingReducer)
  const dispatch = useAppDispatch()
  const { productarticle } = useParams();
  const username = JSON.parse((localStorage.getItem('userData') || '{}')).username;

  const [comment, setComment] = useState('');
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');

  const navigateTo = useCallback(() => {
    const to = `/${productarticle}`;
    navigate(to);
  },[navigate, productarticle])

  useEffect(() => {
    dispatch(ratingDataReducer.actions.setRating(0))
  }, [])
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Отправка формы на сервер
    const bodyCommentCreated = {
      dignites: pros,
      disadvantages: cons,
      comment: comment,
      score:  rate,
      productArticle: productarticle,
      username
    }

    const createCommentResponse = await axios.post(`${localhostComment}`, bodyCommentCreated);
    dispatch(ratingDataReducer.actions.setRating(0))
    navigateTo();
  };

  return (
    <div className='mb-4'>
      <Form onSubmit={handleSubmit} className='w-50'>
        <Form.Group  controlId="rating">
          <Form.Label><strong>Ваша оценка</strong></Form.Label>
        </Form.Group>
        <Form.Group className='mt-2' controlId="rating">
          <StarRating/>
        </Form.Group>

        <Form.Group controlId="rating">
          <Form.Label className='mt-4 mb-2'><strong>Поделитесь вашими впечатлениями о товаре</strong></Form.Label>
          
        </Form.Group>
        <Form.Group controlId="pros">
          <Form.Label className='text-secondary mt-2'>Достоинства</Form.Label>
          <FormControl
            as="textarea"
            rows={1}
            value={pros}
            placeholder="Что вам понравилось"
            onChange={(e) => setPros(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="cons">
          <Form.Label className='text-secondary mt-2'>Недостатки</Form.Label>
          <FormControl
            as="textarea"
            rows={2}
            value={cons}
            placeholder="Что не понравилось"
            onChange={(e) => setCons(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="comment">
          <Form.Label className='text-secondary mt-2'>Комментарий</Form.Label>
          <FormControl
            as="textarea"
            rows={5}
            value={comment}
            placeholder="Другие впечатления"
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Button className='mt-3' type="submit">Оставить отзыв</Button>
      </Form>
    </div>
  );
};

export default InputComment;