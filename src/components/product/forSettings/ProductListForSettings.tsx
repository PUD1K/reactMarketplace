import React from 'react';
import { IProduct } from '../../../models/ProductInterface';
import ProductItemForSettings from './ProductItemForSettings';

const ProductListForSettings = (props: {products: IProduct[]}) => {
    return (
        <div className="row align-items-start d-flex">
            {props.products.map((product) => {
                return <div className="col-md-3 mb-5">
                        <ProductItemForSettings
                        key={product.id}
                        product={product}
                        />
                </div>
            })}
        </div>
    );
};

export default ProductListForSettings;

