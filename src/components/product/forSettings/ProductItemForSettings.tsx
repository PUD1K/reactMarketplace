import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import RatingInfo from '../../comments/ScoreInfo';
import { localhost } from '../../../variables/server';
import { IProduct } from '../../../models/ProductInterface';

const ProductItemForSettings = (props: {product: IProduct}) => {
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
                width='230' 
                height='230' 
                alt=''/>
                <div className='mt-2'>
                    <p className='text-start' style={{fontSize:'1.2rem', margin:0, fontWeight:'650'}}>{props.product.price} ₽</p>
                </div>
                <div className='mb-1'>
                    <RatingInfo
                        totalRating={props.product.totalRating}
                        totalFeedbackCount={props.product.commentsCount}
                        feedbackButtonVisible={false}
                    />
                </div>
                <p className='text-start' style={{marginBottom: 0, fontSize: '1.1rem'}}>{props.product.name}</p>
                {
                        props.product.shop
                    ?
                        <p className='text-start text-secondary' style={{fontSize:'1.1rem'}}>{props.product.shop.name}</p>
                    : 
                        <></>
                }
            </div>
        </div>
    );
};

export default ProductItemForSettings;

