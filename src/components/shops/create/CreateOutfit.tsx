import React, { FormEvent, useState } from 'react';
import MyImageUpdater from '../../customElements/MyImageUpdater';
import axios from 'axios';
import { localhostProduct } from '../../../variables/server';
import { useAppSelector } from '../../../hooks/redux';
import { useNavigate, useParams } from 'react-router';

interface CreateOutfitProps{
    subcategoryName: string;
}

const CreateOutfit = ({subcategoryName}: CreateOutfitProps) => {
    const { shopslug } = useParams()
    const navigate = useNavigate();

    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('');
    const [productBrand, setProductBrand] = useState('')
    const [productCountry, setProductCountry] = useState('');
    const [productMaterial, setProductMaterial] = useState('')
    const [productConfiguration, setProductConfiguration] = useState('');
    const [productPrice, setProductPrice] = useState('')
    
    const [productBlobImage, setproductBlobImage] = useState<Blob | null>(null);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("name", productName);
        formData.append("description", productDescription);
        if(productBlobImage){
            formData.append("image", productBlobImage);
        }
        formData.append("subcategoryName", subcategoryName);
        formData.append("manufacturer", productBrand);
        if(shopslug){
            formData.append("shopSlug", shopslug);
        }
        // 
        formData.append("price", productPrice);
        formData.append("volume", '');
        formData.append("sctructure", '');
        formData.append("configuration", productConfiguration);
        formData.append("count", '100');
        formData.append("color", '');
        formData.append("size", '');
        formData.append("material", productMaterial);
        formData.append("country", productCountry);
        formData.append("cpu", '');
        formData.append("gpu", '');
        formData.append("ram", '');
        formData.append("matrix", '');
        formData.append("diagonal", '');

        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        }
        try{
            await axios.post(`${localhostProduct}`, formData, config);
            navigate('/shop_setting');
        }
        catch(e){
            console.log(e)
        }
    }

    const handleImageUpload = (image: Blob) => {
        setproductBlobImage(image);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='row mt-4 mb-5'>
                <MyImageUpdater
                onImageUpload={handleImageUpload}
                imageUrl={''}/>
                <div className='col-md-5'>
                    <p className='text-start mb-2 mt-2 fs-5' style={{marginBottom: 0}}>Название: </p>
                    <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="form-control w-50"
                    id="floatingInput"
                    placeholder="Название товара"
                    />

                    <p className='text-start mb-2 mt-2 fs-5' style={{marginBottom: 0}}>Описание: </p>
                    <input
                    type="text"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="form-control w-100"
                    id="floatingInput"
                    placeholder="Описание товара"
                    />

                    <p className='text-start mb-2 mt-2 fs-5' style={{marginBottom: 0}}>Бренд: </p>
                    <input
                    type="text"
                    value={productBrand}
                    onChange={(e) => setProductBrand(e.target.value)}
                    className="form-control w-100"
                    id="floatingInput"
                    placeholder="Наименование бренда"
                    />

                     <p className='text-start mb-2 mt-2 fs-5' style={{marginBottom: 0}}>Материал: </p>
                    <input
                    type="text"
                    value={productMaterial}
                    onChange={(e) => setProductMaterial(e.target.value)}
                    className="form-control w-100"
                    id="floatingInput"
                    placeholder="Материал, из которого сделан товар"
                    />

                    <p className='text-start mb-2 mt-2 fs-5' style={{marginBottom: 0}}>Комплектация: </p>
                    <input
                    type="text"
                    value={productConfiguration}
                    onChange={(e) => setProductConfiguration(e.target.value)}
                    className="form-control w-100"
                    id="floatingInput"
                    placeholder="Комплектация товара"
                    />

                    <p className='text-start mb-2 mt-2 fs-5' style={{marginBottom: 0}}>Страна производитель: </p>
                    <input
                    type="text"
                    value={productCountry}
                    onChange={(e) => setProductCountry(e.target.value)}
                    className="form-control w-100"
                    id="floatingInput"
                    placeholder="Страна производитель"
                    />

                    <p className='text-start mb-2 mt-2 fs-5' style={{marginBottom: 0}}>Стоимость ₽: </p>
                    <input
                    type="text"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="form-control w-100"
                    id="floatingInput"
                    placeholder="Стоимость товара"
                    />                                  

                    <button className="w-25 btn btn-lg btn-primary mt-4" type="submit">
                        Сохранить
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CreateOutfit;