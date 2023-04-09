import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import LoadingSpinner from '../components/customElements/MyLoadingSpinner';
import OutfitProduct from '../components/product/productComponentByType/OutfitProduct';
import SwitcherProducts from '../components/product/SwitcherProducts';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IProduct } from '../models/ProductInterface';
import { productSlice } from '../store/reducers/products/ProductSlice';
import { localhost, localhostProduct } from '../variables/server';

const Product = () => {
    // const [product, setProduct] = useState<IProduct>(Object)
    const { productarticle } = useParams();

    const { product } = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getProduct = async () => {
            // const productResponse = await axios.get(`${localhostProduct}/${productarticle}`);
            const productResponse = await axios.get<IProduct>(`${localhostProduct}/product_by_article/${productarticle}`);
            dispatch(productSlice.actions.setProduct(productResponse.data));
        }
        getProduct();
    }, []);

    return (
        <div>
            {
            true ?
            <SwitcherProducts/>
            :
            <LoadingSpinner/>
            }
        </div>
    );
};

export default Product;

