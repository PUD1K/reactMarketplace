import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { localhost, localhostShop } from '../variables/server';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { IShop } from '../models/ShopInterface';
import MyImageUpdater from '../components/customElements/MyImageUpdater';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../hooks/redux';
import ShopManagersAdministration from '../components/shops/ShopManagersAdministration';

interface ShopUpdateProps{
    shopWillBeCreate: boolean;
}

const ShopSettings = ({ shopWillBeCreate }: ShopUpdateProps) => {
    const [shop, setShop] = useState(Object || null);
    const [shopName, setShopName] = useState('')
    const [shopDescription, setShopDescription] = useState('')
    const [shopImageUrl, setShopImageUrl] = useState('')
    const [shopBlobImage, setShopBlobImage] = useState<Blob | null>(null)

    const { shopslug } = useParams()

    const navigate = useNavigate();

    const navigateTo = useCallback(() => {
        const to = `/shops_administration`;
        navigate(to);
      },[navigate])
    

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("name", shopName);
        formData.append("description", shopDescription);
        if(shopBlobImage){
            formData.append("image", shopBlobImage);
        }

        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        }

        const createShopResponse = shopWillBeCreate ? 
            await axios.post(`${localhostShop}`, formData, config)
        :   
            await axios.put(`${localhostShop}`, formData, config)
        navigateTo()
    }

    const handleImageUpload = (image: Blob) => {
        setShopBlobImage(image);
    }

    useEffect(() => {
        if(!shopWillBeCreate){
            const getShop = async () =>{
                const getShopResponse = await axios.get(`${localhostShop}/by_slug/${shopslug}`)
                const shopResponse: IShop = getShopResponse.data;
                setShop(shopResponse);
                setShopName(shopResponse.name);
                setShopDescription(shopResponse.description);
                setShopImageUrl(shopResponse.image);
            }
            getShop();
        }
    }, [])

    return (
        <form onSubmit={onSubmit}>
            <div className='row mt-4 mb-5'>
                <h2 className='mb-4'>{shopWillBeCreate ? 'Создание магазина' : 'Редактирование магазина'}</h2>
                <MyImageUpdater
                onImageUpload={handleImageUpload}
                imageUrl={shopImageUrl}/>
                <div className='col-md-5'>
                    <p className='text-start mb-2 mt-2 fs-5' style={{marginBottom: 0}}>Название: </p>
                    <input
                    type="text"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    className="form-control w-50"
                    id="floatingInput"
                    placeholder="Название магазина"
                    />

                    <p className='text-start mb-2 mt-2 fs-5' style={{marginBottom: 0}}>Описание: </p>
                    <input
                    type="text"
                    value={shopDescription}
                    onChange={(e) => setShopDescription(e.target.value)}
                    className="form-control w-100"
                    id="floatingInput"
                    placeholder="Название магазина"
                    />

                    {(!shopWillBeCreate && 
                    (<div className='mt-3'>
                        <ShopManagersAdministration
                        shop={shop}/>
                    </div>)
                     )}

                    <button className="w-25 btn btn-lg btn-primary mt-4" type="submit">
                        Сохранить
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ShopSettings;