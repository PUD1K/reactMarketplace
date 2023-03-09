import React, {useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../models/CategoryInterface';
import CategoryItem from './CategoryItem';

const CategoriesList = (props: {categories: ICategory[]}) => {
    return (
        <div className="row align-items-start d-flex" style={{width: '400px'}}>
            {props.categories.map(category => {
                return <CategoryItem
                key={category.slug}
                category={category}
                />
            })}
        </div>
    );
};

export default CategoriesList;