import axios from 'axios';
import { relative } from 'path';
import React, {useState, useEffect} from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import LoadingSpinner from '../components/customElements/MyLoadingSpinner';
import Sort from '../components/filters/sort';
import PaginationComponent from '../components/product/PaginationComponent';
import ProductList from '../components/product/ProductList';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IProduct } from '../models/ProductInterface';
import { productsSlice } from '../store/reducers/products/ProductsSlice';
import { localhostCategory, localhostProduct, localhostSubcategory } from '../variables/server';


const Products = () => {
    const { products, totalPages, totalProducts } = useAppSelector(state => state.productsReducer);
    const dispatch = useAppDispatch();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const page = searchParams.get('page');
    const sort = searchParams.get('sort');
    const currentUrl = location.pathname + location.search

    let { subcategoryslug } = useParams();

    useEffect(() => {
        const getAllProducts = async () => {
            const allProductssResponse = await axios.get(`${localhostProduct}/by_subcategory/${subcategoryslug}?page=${page ? page : 1}&sort=${sort}`)
            dispatch(productsSlice.actions.setProducts(allProductssResponse.data));
        }
        getAllProducts();
    }, [subcategoryslug, page, sort]);

    return (
        <div>
            <div className='mt-4'>
                <div className='mb-2'>
                    <h2 style={{display: 'inline-block'}}>
                        {
                        products[0] 
                        ? 
                            products[0].subCategory.name 
                        : 
                            'Товары в этой категории отсутствуют'}
                        </h2>
                    <span className='ms-2 text-secondary'>{totalProducts} товаров</span>
                </div>
                <Sort
                currentUrl={currentUrl}/>
                <hr/>
                {
                    products.length
                    ?  
                        <ProductList
                        products={products}
                        />
                    : 
                        <LoadingSpinner/>
                }
            </div>
            <div className='d-flex и justify-content-center'>
                <PaginationComponent
                    currentPage={1}
                    totalPages={totalPages}
                    currentUrl={currentUrl}
                />
            </div>
        </div>
    );
};

export default Products;