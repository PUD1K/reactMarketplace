import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import SubCategoriesList from '../components/subCategories/SubCategoryList';
import { ICategory } from '../models/CategoryInterface';
import { localhostCategory, localhostSubcategory } from '../variables/server';

const Categories = () => {
    const [subCategories, setSubCategories] = useState<ICategory[]>([])
    let { categoryslug } = useParams();

    useEffect(() => {
        const getAllProducts = async () => {

            const allSubCategoriesResponse = await axios.get(`${localhostSubcategory}/by_category/${categoryslug}`)
            setSubCategories(allSubCategoriesResponse.data)
        }
        getAllProducts();
    }, []);
    return (
        <div>
            <div className='mt-4'>
                <h1>Категории</h1>
                {subCategories.length
                    ?  
                    <SubCategoriesList
                    subCategories={subCategories}
                    />
                    : 
                    <h1>Подкатегории не найдены</h1>
                }
            </div>
        </div>
    );
};

export default Categories;