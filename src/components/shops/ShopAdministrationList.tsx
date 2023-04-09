import React from 'react';
import { IShop } from '../../models/ShopInterface';
import ShopAdministrationItem from './ShopAdministrationItem';

interface ShopSettingProps{
    shops: IShop[];
}

const ShopSettingList = ({shops}: ShopSettingProps) => {
    return (
        <div className="row align-items-start d-flex">
            {
                shops.map(shop => {
                    return <div className='col-md-2 mb-5'>
                        <ShopAdministrationItem
                        shop={shop}/>
                    </div>
                })
            }
        </div>
    );
};

export default ShopSettingList;