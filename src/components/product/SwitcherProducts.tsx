import axios from 'axios';
import React, { FormEvent } from 'react';
import { Row, Col } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ratingDataReducer } from '../../store/reducers/products/RatingSlice';
import { localhost, localhostProduct } from '../../variables/server';
import Comments from '../comments/Comments';
import InputComment from '../comments/InputComment';
import RatingInfo from '../comments/ScoreInfo';
import StarStatRating from '../comments/StarStatRating';
import StarRating from '../comments/StartRating';
import OutfitProduct from './productComponentByType/OutfitProduct';
import EletronicProduct from './productComponentByType/ElectronicProduct';
import DishesProduct from './productComponentByType/DishesProduct';
import CosmeticProduct from './productComponentByType/CosmeticProduct';
import AdornmentProduct from './productComponentByType/AdornmentProduct';

const SwitcherProducts = () => {
    enum categoriesEnum{
        OUTFIT = "Одежда",
        ELECTRONIC = "Техника",
        DISHES = "Посуда",
        COMSETIC = "Косметика",
        ADOMMENT = "Украшения",
    }

    const { product, selectedColor, selectedSize } = useAppSelector(state => state.productReducer)
    const username = JSON.parse((localStorage.getItem('userData') || '{}')).username;

    const switchProduct = () => {
        if(product.subCategory.category.name === categoriesEnum.OUTFIT){
            return <OutfitProduct/>
        }
        if(product.subCategory.category.name === categoriesEnum.ELECTRONIC){
            return <EletronicProduct/>
        }
        if(product.subCategory.category.name === categoriesEnum.DISHES){
            return <DishesProduct/>
        }
        if(product.subCategory.category.name === categoriesEnum.COMSETIC){
            return <CosmeticProduct/>
        }
        if(product.subCategory.category.name === categoriesEnum.ADOMMENT){
            return <AdornmentProduct/>
        }
    }
    
    const addToBasket = async () => {
        const addToBasketBody = {
            username,
            article: product.article,
            count: 1,
            color: selectedColor,
            size: selectedSize
        }
        const response = await axios.post(`${localhostProduct}/add_to_basket`, addToBasketBody)
    }

    return (
        <div>
            <div className='row mt-5 mb-5'>
                <div className='col-md-5 me-3'>
                    <img 
                        src={`${localhost}/${product.image}`} 
                        width='600' 
                        height='650' 
                        alt=''
                    />
                </div>
                <div className='col-md-5'>
                    {switchProduct()}
                    <button className="text-start btn btn-primary" type="submit" onClick={() => addToBasket()}>В корзину</button>
                </div>
                <div className='mt-4'>
                    <RatingInfo
                    totalRating={product.totalRating}
                    totalFeedbackCount={product.commentsCount}
                    feedbackButtonVisible={true}
                    />
                </div>
                <div>
                    <Comments
                    comments={product.comments}
                    />
                </div>
            </div>
        </div>
    );
};

export default SwitcherProducts;