import React, {useState} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ICategory } from '../../models/CategoryInterface';
import {useLocation} from "react-router-dom";


const MyDropdown = (props: {category: ICategory}) => {
    const [collapseShow, setCollapseShow] = useState(false);
    const [hover, setHover] = useState(false);

    const collapseStyle = `collapse${collapseShow? ' show' : ''}`
    const pStyle = hover ? 'ms-4 mb-0' : 'ms-4 mb-0 text-secondary'

    const navigate = useNavigate();

    const navigateTo = (categorySlug: string, subcategorySlug: string) => {
        navigate(`categories/${categorySlug}/${subcategorySlug}`)
    }
    

    return (
        <div className='mb-3'>
            <p className='dropdown-toggle fw-light mb-0 fs-5' data-bs-toggle="collapse" data-bs-target='#collapseExample' onClick={() => setCollapseShow(!collapseShow)}>{props.category.name}</p>
            <div className={collapseStyle} id='collapseExample'>
                {props.category.subCategories.map(subcategory => {
                    return (<div className='mt-2'>
                                <p 
                                className={pStyle}
                                style={{cursor: "pointer"}}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                onClick={() => navigateTo(props.category.slug, subcategory.slug)} 
                                key={subcategory.name}>
                                    {subcategory.name}
                                </p>
                            </div>)
                })}
            </div>
        </div>
    );
};

export default MyDropdown;