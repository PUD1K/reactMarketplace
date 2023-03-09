import React, {useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import { ISubcategory } from '../../models/SubcategryInterface';
import { localhost } from '../../variables/server';

const CategoryItem = (props: {subCategory: ISubcategory}) => {
    const navigate = useNavigate()
    const navigateTo = useCallback(() => {
        const to = props.subCategory.slug
        navigate(to);
    },[props, navigate])
    
    return (
        <div className="col-1 mb-5" style={{width: '350px'}}>
            <div onClick={navigateTo} style={{cursor: "pointer"}}>
                <img 
                src={`${localhost}/${props.subCategory.image}`} 
                width='350px' 
                height='350px' 
                alt=''/>
                <p className='text-start fs-5' style={{marginBottom: 0}}>{props.subCategory.name}</p>
            </div>
        </div>
    );
};

export default CategoryItem;