import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import ProductList from '../product/ProductList';
import { useNavigate } from 'react-router';

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
                        <ProductList
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