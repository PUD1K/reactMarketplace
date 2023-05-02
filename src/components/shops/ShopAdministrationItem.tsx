import React from 'react';
import { IShop } from '../../models/ShopInterface';
import { localhost } from '../../variables/server';
import { useNavigate } from 'react-router-dom';

interface ShopSettingProps{
    shop: IShop;
}

const ShopSettingItem = ({shop}: ShopSettingProps) => {

    const navigate = useNavigate()
    const navigateShop = (shopSlug: string) => {
        navigate(`/shops_administration/${shopSlug}`)
    }

    return (
        <div>
            <div onClick={() => navigateShop(shop.slug)} style={{cursor: "pointer"}}>
                <img 
                src={`${localhost}/${shop.image}`} 
                width='300' 
                height='300' 
                alt=''/>
                <p className='text-start fs-5' style={{marginBottom: 0}}>{shop.name}</p>
                <p className='text-start fs-5 text-secondary'>{shop.products.length} различных товаров</p>
                <button className="btn btn-primary">Изменить</button>
            </div>
        </div>
    );
};

export default ShopSettingItem;