import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShopAdministrationList from '../components/shops/ShopAdministrationList';
import { localhostProduct, localhostShop } from '../variables/server';
import { useNavigate } from 'react-router-dom';

const ShopsAdministration = () => {
    const [shops, setShops] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getAllShops = async () => {
            const allShopsResponse = await axios.get(`${localhostShop}`)
            setShops(allShopsResponse.data);
        }
        getAllShops();
    }, [])

    const navigateToCreateShop = () => {
        navigate(`/shops_administration/create`);
    }

    return (
        <div className='mt-4'>
            <h2 className='mb-3'>Администрирование магазинов</h2>
            <button className="btn btn-primary" onClick={() => navigateToCreateShop()}>+ Создать новый</button>
            <div className='mt-4'>
                <ShopAdministrationList
                shops={shops}/>
            </div>
        </div>
    );
};

export default ShopsAdministration;