import React, {useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../models/CategoryInterface';
import { localhost } from '../../variables/server';

const CategoryItem = (props: {category: ICategory}) => {
    const navigate = useNavigate()
    const navigateTo = useCallback(() => {
        const to = props.category.slug
        navigate(to);
    },[props, navigate])
    
    return (
        <div className="col-1 mb-5" style={{width: '350px'}}>
            <div onClick={navigateTo} style={{cursor: "pointer"}}>
                <img 
                src={`${localhost}/${props.category.image}`} 
                width='350' 
                height='350' 
                alt=''/>
                <p className='text-start fs-5' style={{marginBottom: 0}}>{props.category.name}</p>
            </div>
        </div>
    );
};

export default CategoryItem;