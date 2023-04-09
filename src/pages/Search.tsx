import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router';
import Sort from '../components/filters/sort';
import PaginationComponent from '../components/product/PaginationComponent';
import ProductList from '../components/product/ProductList';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IProduct } from '../models/ProductInterface';
import { productsSlice } from '../store/reducers/products/ProductsSlice';
import { localhostProduct } from '../variables/server';

const Search = () => {
    const { products, totalPages, totalProducts} = useAppSelector(state => state.productsReducer);
    const dispatch = useAppDispatch();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    
    const page = searchParams.get('page');
    const sort = searchParams.get('sort');
    const query = searchParams.get('query');
    const currentUrl = location.pathname + location.search

    useEffect(() => {
        const getSearchProducts = async () => {
            const searchResponse = await axios.get(`${localhostProduct}/search/?query=${query}&sorting=${sort}&page=${page ? page : 1}`)
            dispatch(productsSlice.actions.setProducts(searchResponse.data));
            console.log(searchResponse.data)
        }
        getSearchProducts();
    }, [query, sort, page]);

    return (
        <div className='mt-3'>
            <span className='fs-3'>По запросу <strong>{query}</strong> найдено {totalProducts } товаров</span>
            <div className='mt-3'>
                {
                    totalProducts > 0
                    ?   
                        <>
                        <Sort
                        currentUrl={currentUrl}/>
                        <hr/>
                        </>
                    :
                        <></>
                }
                <ProductList
                products={products}
                />
            </div>
            {
                totalPages > 0 
                ?
                    <div className='d-flex и justify-content-center'>
                        <PaginationComponent
                            currentPage={page ? Number(page) : 1}
                            totalPages={totalPages}
                            currentUrl={currentUrl}
                        />
                    </div>
                  :
                  <></>
            }
        </div>
    );
};

export default Search;