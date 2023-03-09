import React, { useCallback } from 'react';
import { IProduct } from '../../models/ProductInterface';
import { useNavigate } from 'react-router-dom'
import MyToast from '../customElements/MyToast';

const ProductItem = (props: {product: IProduct}) => {
    const navigate = useNavigate()
    const navigateTo = useCallback(() => {
        const to = props.product.article
        navigate(to);
    },[props, navigate])

    const addToBasket = () => {
        
    }

    return (
        <div className="col-1 mb-5" style={{width: '250px'}}>
            <div onClick={navigateTo} style={{cursor: "pointer"}}>
                <img 
                src={`http://localhost:7000/${props.product.image}`} 
                width='250' 
                height='250' 
                alt=''/>
                <p className='text-start fs-5' style={{marginBottom: 0}}>{props.product.name}</p>
                <p className='text-start fs-5 text-secondary'>{props.product.manufacturer}</p>
                <p className='text-start fs-5 fw-weight-bold'>{props.product.price} ₽</p>
            </div>
            <button className="text-start btn btn-primary" type="submit">В корзину</button>
        </div>
    );
};

export default ProductItem;

