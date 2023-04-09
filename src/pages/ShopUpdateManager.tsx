import React, { useEffect, useState } from 'react';
import { localhost, localhostShop } from '../variables/server';
import axios from 'axios';
import { useParams } from 'react-router';
import { IShop } from '../models/ShopInterface';

const ShopUpdateManager = () => {
    const [shop, setShop] = useState(Object);
    const [shopName, setShopName] = useState('')
    const [shopDescription, setShopDescription] = useState('')
    const [shopImage, setShopImage] = useState('')


    const { shopslug } = useParams()

    useEffect(() =>{
        const getShop = async () => {
            const getShopResponse = await axios.get<IShop>(`${localhostShop}/by_slug/${shopslug}`);
            setShop(getShopResponse.data)
            setShopName(getShopResponse.data.name)
            setShopDescription(getShopResponse.data.description)
            setShopImage(getShopResponse.data.image)
        }
        getShop()
    }, [])

    return (
        <div className='row mt-5 mb-5'>
            <div className='col-md-4'>
                <img 
                src={`${localhost}/${shop.image}`} 
                width='400' 
                height='400' 
                alt=''/>
            </div>
            <div className='col-md-5'>
                <p className='text-start fs-5' style={{marginBottom: 0}}>Название: </p>
                <input
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                className="form-control w-50"
                id="floatingInput"
                placeholder="Название магазина"
                />

                <p className='text-start fs-5' style={{marginBottom: 0}}>Описание: </p>
                <input
                type="text"
                value={shopDescription}
                onChange={(e) => setShopName(e.target.value)}
                className="form-control w-100"
                id="floatingInput"
                placeholder="Название магазина"
                />
            </div>
        </div>
    );
};

export default ShopUpdateManager;