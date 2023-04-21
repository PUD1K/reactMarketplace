import React, {useCallback} from 'react';
import { ISubcategory } from '../../models/SubcategryInterface';
import SubCategoryItem from './SubCategoryItem';

const SubCategoriesList = (props: {subCategories: ISubcategory[]}) => {
    return (
        <div className="row align-items-start d-flex">
            {props.subCategories.map(subCategory => {
                return <SubCategoryItem
                key={subCategory.slug}
                subCategory={subCategory}
                />
            })}
        </div>
    );
};

export default SubCategoriesList;