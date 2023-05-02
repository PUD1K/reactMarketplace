import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router';
import ProductListForSettings from '../product/forSettings/ProductListForSettings';

const ShopProductsSettings = () => {
    const { shop } = useAppSelector(state => state.shopDataReducer)
    const navigate = useNavigate();

    const navigateToCreateShop = () => {
        navigate(`/shop_setting/${shop.slug}/create_product`);
    }

    return (
        <div className=''>
            <button className="btn btn-primary" onClick={() => navigateToCreateShop()}>+ Создать</button>
            {
                shop.products.length 
                ?
                    <div className='mt-3'>
                        <ProductListForSettings
                        products={shop.products}
                        />
                    </div>
                :
                    <div>Товары отсутствуют</div>
            }
        </div>
    );
};

export default ShopProductsSettings;