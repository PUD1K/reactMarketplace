import React from 'react';
import { IProduct } from '../../models/ProductInterface';
import ProductItem from './ProductItem';

const ProductList = (props: {products: IProduct[]}) => {
    // console.log(props)
    return (
        <div className="row align-items-start d-flex">
            {props.products.map((product) => {
                return <ProductItem
                key={product.id}
                product={product}
                />
            })}
        </div>
    );
};

export default ProductList;

