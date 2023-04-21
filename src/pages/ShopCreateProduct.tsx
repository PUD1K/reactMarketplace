import React, { FormEvent, useEffect, useState } from 'react';
import { ICategory } from '../models/CategoryInterface';
import axios from 'axios';
import { useParams } from 'react-router';
import { localhostShop } from '../variables/server';
import { IShop } from '../models/ShopInterface';
import { ISubcategory } from '../models/SubcategryInterface';
import SwitcherCreateProduct from '../components/shops/SwitcherCreateProduct';

const ShopCreateProduct = () => {
    const [categoriesInShop, setCategoriesInShop] = useState<ICategory[]>([]);
    const [aviableSubCategories, setAviableSubCategories] = useState<ISubcategory[]>([]);

    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');

    const {shopslug} = useParams();
    
    useEffect(() => {
        const getCategoriesInShop = async () => {
            const categoriesInShopResponse = await axios.get<IShop>(`${localhostShop}/by_slug/${shopslug}`);
            const categories = categoriesInShopResponse.data.categories;
            // const subcategories = categories.flatMap(category => category.subCategories);
            setCategoriesInShop(categories);
            setAviableSubCategories(categories[0].subCategories);

            setSelectedCategory(categories[0].name);
            setSelectedSubcategory(categories[0].subCategories[0].name);
        }
        getCategoriesInShop();   
    }, [])

    const handleSetSelectedCategory = (e: FormEvent) => {
        const categoryName = (e.target as HTMLInputElement).value
        setSelectedCategory(categoryName);
        const category = categoriesInShop.find(subcategory => subcategory.name === categoryName);
        if(category){
            setAviableSubCategories(category.subCategories);
            setSelectedSubcategory(category.subCategories[0].name)
        }
    }

    return (
        <div>
            <h2 className='mb-4 mt-4'>Создание товара</h2>

            <p className='text-start mb-2 mt-2 fs-5' style={{marginBottom: 0}}>Категория: </p>
            <select className='form-select w-25' onChange={(e: FormEvent) => handleSetSelectedCategory(e)}>
                {categoriesInShop.map(category => {
                    return <option key={category.id} value={category.name}>{category.name}</option>
                })}
            </select>
            
            <p className='text-start mb-2 mt-2 fs-5' style={{marginBottom: 0}}>Подкатегория: </p>
            <select className='form-select w-25' onChange={(e: FormEvent) => setSelectedSubcategory((e.target as HTMLInputElement).value)}>
                {aviableSubCategories.map(subcategory => {
                    return <option key={subcategory.id} value={subcategory.name}>{subcategory.name}</option>
                })}
            </select>

            <SwitcherCreateProduct
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}/>
        </div>
    );
};

export default ShopCreateProduct;