import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router';
import InputComment from '../components/comments/InputComment';
import { useAppSelector } from '../hooks/redux';
import { IProduct } from '../models/ProductInterface';
import { localhost, localhostProduct } from '../variables/server';

const Comment = () => {
    const { productarticle } = useParams();
    const [product, setProduct] = useState<IProduct>(Object);

    useEffect(() => {
        const getProduct = async () => {
            const productResponse = await axios.get(`${localhostProduct}/product_by_article/${productarticle}`)
            setProduct(productResponse.data);
        }
        getProduct()
    }, [])

    return (
        <div className='mt-2'>
            <Row>
                <Col>
                    <h2>Отзыв о товаре {product.name}</h2>
                    <img 
                    src={`${localhost}/${product.image}`} 
                    width='100' 
                    height='100' 
                    alt=''/>
                </Col>
            </Row>
            <InputComment/>
        </div>
    );
};

export default Comment;