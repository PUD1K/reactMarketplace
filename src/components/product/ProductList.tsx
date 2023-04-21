import React from 'react';
import { IProduct } from '../../models/ProductInterface';
import ProductItem from './ProductItem';

const ProductList = (props: {products: IProduct[]}) => {
    console.log(props.products)
    return (
        <div className="row align-items-start d-flex">
            {props.products.map((product) => {
                return <div className="col-md-2 mb-5">
                    <ProductItem
                    key={product.id}
                    product={product}
                    />
                </div>
            })}
        </div>
    );
};

export default ProductList;

