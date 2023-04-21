import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { IProduct } from '../../../models/ProductInterface';
import { localhost } from '../../../variables/server';
import ColorSelector from '../ColorSelector';
import SizeSelector from '../SizeSelector';

const CosmeticProduct = () => {
    const { product } = useAppSelector(state => state.productReducer)
    return (
        <div>
            <h2>{product.name}</h2>
            <p className='fs-5 text-secondary'>{product.shop.name}</p>

            {(product.manufacturer && product.manufacturer !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Бренд: </strong>{product.manufacturer}</p>)}
            
            {(product.manufacturer && product.manufacturer !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Цвет: </strong>{product.color}</p>)}
            {(product.manufacturer && product.manufacturer !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Объем: </strong>{product.volume}</p>)}
            {(product.manufacturer && product.manufacturer !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Аллергены: </strong>{product.material}</p>)}
            {(product.manufacturer && product.manufacturer !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Комплектация: </strong>{product.configuration}</p>)}
            {(product.manufacturer && product.manufacturer !== '' &&
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Страна производитель: </strong>{product.country}</p>)}

            <p className='fs-5 mt-3'>{product.price} ₽</p>
            {/* <button className="text-start btn btn-primary" type="submit">В корзину</button> */}
        </div>

    );
};

export default CosmeticProduct;