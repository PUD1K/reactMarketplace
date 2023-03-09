import React, {useCallback} from 'react';
import { ISubcategory } from '../../models/SubcategryInterface';
import SubCategoryItem from './SubCategoryItem';

const CategoriesList = (props: {subCategories: ISubcategory[]}) => {
    return (
        <div className="row align-items-start d-flex" style={{width: '350px'}}>
            {props.subCategories.map(subCategory => {
                return <SubCategoryItem
                key={subCategory.slug}
                subCategory={subCategory}
                />
            })}
        </div>
    );
};

export default CategoriesList;