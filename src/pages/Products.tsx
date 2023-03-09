import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductList from '../components/product/ProductList';
import { IProduct } from '../models/ProductInterface';
import { localhostCategory, localhostProduct, localhostSubcategory } from '../variables/server';

const Categories = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    let { subcategoryslug } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getAllProducts = async () => {
            setIsLoading(true);

            const allProductssResponse = await axios.get(`${localhostProduct}/by_subcategory/${subcategoryslug}`)
            setProducts(allProductssResponse.data)
            
            setIsLoading(false);
        }
        getAllProducts();
    }, [subcategoryslug]);

    return (
        <div>
            <div className='mt-4'>
                <h1>Товары</h1>
                {products.length
                    ?  
                    <ProductList
                    products={products}
                    />
                    : 
                    <h1></h1>
                }
            </div>
        </div>
    );
};

export default Categories;