import axios from 'axios';
import React, {useState, useEffect} from 'react'
import LoadingSpinner from '../components/customElements/MyLoadingSpinner';
import Navbar from '../components/customElements/MyNavbar';
import Slider from '../components/customElements/MySlider';
import ProductItem from '../components/product/ProductItem';
import ProductList from '../components/product/ProductList';
import { IProduct } from '../models/ProductInterface';
import { localhost, localhostProduct } from '../variables/server';


const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        console.log('asd')
        const getAllProducts = async () => {
            const allProductsResponse = await axios.get(`${localhostProduct}`)
            setProducts(allProductsResponse.data)
        }
        getAllProducts();
    }, []);

    return (
        <div>
            <Slider/>

            <h2 className='mb-3'>Все товары</h2>

            <div>
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
        </div>
    )
}

export default Home