import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { IProduct } from '../../../models/ProductInterface';
import { localhost } from '../../../variables/server';
import ColorSelector from '../ColorSelector';
import SizeSelector from '../SizeSelector';

const OutfitProduct = () => {
    const { product } = useAppSelector(state => state.productReducer)
    return (
        <div>
            <h2>{product.name}</h2>
            <p className='fs-5 text-secondary'>{product.shop.name}</p>

            <div>
                <SizeSelector/>
            </div>
            <div className='mt-3 mb-3'>
                <ColorSelector/>
            </div>
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Бренд: </strong>{product.manufacturer}</p>
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Страна производитель: </strong>{product.country}</p>
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Материал: </strong>{product.material}</p>
            <p className='fs-5' style={{margin:'0px', marginTop:'5px'}}><strong>Комплектация: </strong>{product.configuration}</p>

            <p className='fs-5 mt-3'>{product.price} ₽</p>
            {/* <button className="text-start btn btn-primary" type="submit">В корзину</button> */}
        </div>

    );
};

export default OutfitProduct;