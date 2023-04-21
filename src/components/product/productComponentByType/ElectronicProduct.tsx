import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { IProduct } from '../../../models/ProductInterface';
import { localhost } from '../../../variables/server';
import ColorSelector from '../ColorSelector';
import SizeSelector from '../SizeSelector';

const ElectronicProduct = () => {
    const { product } = useAppSelector(state => state.productReducer)
    return (
        <div>
            <h2>{product.name}</h2>
            <p className='fs-5 text-secondary'>{product.shop.name}</p>

            {product.manufacturer && product.manufacturer !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Бренд: </strong>{product.manufacturer}</p>}
            {product.cpu && product.cpu !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Процессор: </strong>{product.cpu}</p>}
            {product.gpu && product.gpu !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Видеокарта: </strong>{product.gpu}</p>}
            {product.ram && product.ram !== '' &&
             <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Оперативная память: </strong>{product.ram}</p>}
            {product.matrix && product.matrix !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Матрица экрана: </strong>{product.matrix}</p>}
            {product.diagonal && product.diagonal !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Диагональ экрана: </strong>{product.diagonal}</p>}
            
            {product.country && product.country !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Страна производитель: </strong>{product.country}</p>}
            {product.configuration && product.configuration !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Комплектация: </strong>{product.configuration}</p>}            
                               
            <p className='fs-5 mt-3'>{product.price} ₽</p>
            {/* <button className="text-start btn btn-primary" type="submit">В корзину</button> */}
        </div>

    );
};

export default ElectronicProduct;