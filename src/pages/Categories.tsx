import axios from 'axios';
import React, {useState, useEffect} from 'react';
import CategoriesList from '../components/categories/CategorysList';
import LoadingSpinner from '../components/customElements/MyLoadingSpinner';
import { ICategory } from '../models/CategoryInterface';
import { localhostCategory } from '../variables/server';

const Categories = () => {
    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(() => {
        const getAllProducts = async () => {
            const allCategoriesResponse = await axios.get(`${localhostCategory}`)
            setCategories(allCategoriesResponse.data)
        }
        getAllProducts();
    }, []);
    return (
        <div>
            <div className='mt-4'>
                <h1>Категории</h1>
                {
                    categories.length
                    ?
                        <CategoriesList
                        categories={categories}
                        />
                    :
                        <LoadingSpinner/>
                }
            </div>
        </div>
    );
};

export default Categories;