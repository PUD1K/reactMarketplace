import React, { useCallback } from 'react';
import { IProduct } from '../../models/ProductInterface';
import { useNavigate, useParams } from 'react-router-dom'
import MyToast from '../customElements/MyToast';
import { localhost, localhostProduct } from '../../variables/server';
import axios from 'axios';
import RatingInfo from '../comments/ScoreInfo';

const ProductItem = (props: {product: IProduct}) => {
    const navigate = useNavigate()
    const username = JSON.parse((localStorage.getItem('userData') || '{}')).username;

    const navigateTo = useCallback(() => {
        const to = `/${props.product.article}`;
        navigate(to);
    },[props, navigate])


    return (
        <div>
            <div onClick={navigateTo} style={{cursor: "pointer"}}>
                <img 
                src={`${localhost}/${props.product.image}`} 
                width='250' 
                height='250' 
                alt=''/>
                <RatingInfo
                    totalRating={props.product.totalRating}
                    totalFeedbackCount={props.product.commentsCount}
                    feedbackButtonVisible={false}
                />
                <p className='text-start fs-5' style={{marginBottom: 0}}>{props.product.name}</p>
                <p className='text-start fs-5 text-secondary'>{props.product.shop.name}</p>
                <p className='text-start fs-5 fw-weight-bold'>{props.product.price} ₽</p>
            </div>
        </div>
    );
};

export default ProductItem;

