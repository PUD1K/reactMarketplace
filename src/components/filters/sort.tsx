import axios from 'axios';
import React, { FormEvent, useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { productsSlice } from '../../store/reducers/products/ProductsSlice';
import { localhostProduct } from '../../variables/server';

interface SortProps{
    currentUrl: string;
  }

const Sort = ({ currentUrl }: SortProps) => {
    const [sortParam, setSortParam] = useState('');
    const navigate = useNavigate();

    const location = useLocation();

    const handleChange = async (e: FormEvent) => {
        e.preventDefault();
        
        let curUrl = new URL(window.location.href)
        const searchParams = new URLSearchParams(curUrl.search);
        const sort = searchParams.get('sort')

        const newSortParam = (e.target as HTMLInputElement).value;
        setSortParam(newSortParam);
        console.log(sort)
        if(sort){
            searchParams.set('sort', String(newSortParam));
        }
        else{
            searchParams.append('sort', String(newSortParam));
        }            
        curUrl.search = searchParams.toString()
        navigate(curUrl.pathname + curUrl.search)
      }

    // useEffect(() => {
    //     const sort = async (sort: string) => {
    //         if(sort && sort !== ''){
    //             const sortBody = {
    //                 sort: sortParam,
    //                 page: 1,
    //                 pageSize: 6
    //             }
    //             // const sortResponse = await axios.post(`${localhostProduct}/sort`, sortBody);
    //             // dispatch(productsSlice.actions.setProducts(sortResponse.data));
    //         }
    //     }
    //     sort(sortParam);
    // }, [sortParam])

    return (
        <select
            className='form-select'
            style={{width: '200px'}}
            value={sortParam}
            onChange={(e: FormEvent) =>handleChange(e)}
        >
            <option value={'popular'}>
                Популярные
            </option>
            <option value={'new'}>
                Новинки
            </option>
            <option value={'price_asc'}>
                Сначала дешевые
            </option>
            <option value={'price_desc'}>
                Сначала дорогие
            </option>
            <option value={'rating'}>
                Высокий рейтинг
            </option>
        </select>
    );
};

export default Sort;