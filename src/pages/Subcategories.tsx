import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/customElements/MyLoadingSpinner';
import SubCategoriesList from '../components/subCategories/SubCategoryList';
import { ISubcategory } from '../models/SubcategryInterface';
import { localhostSubcategory } from '../variables/server';

const Categories = () => {
    const [subCategories, setSubCategories] = useState<ISubcategory[]>([])
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
                {
                    subCategories.length
                    ?  
                        <SubCategoriesList
                        subCategories={subCategories}
                        />
                    : 
                        <LoadingSpinner/>
                }
            </div>
        </div>
    );
};

export default Categories;