import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ICategory } from '../../models/CategoryInterface';
import {useLocation} from "react-router-dom";


const MyDropdown = (props: {category: ICategory}) => {
    const [collapseShow, setCollapseShow] = useState(false);
    const collapseStyle = `collapse${collapseShow? ' show' : ''}`

    const location = useLocation();

    return (
        <div>
            <p className='dropdown-toggle fw-light mb-0' data-bs-toggle="collapse" data-bs-target='#collapseExample' onClick={() => setCollapseShow(!collapseShow)}>{props.category.name}</p>
            <div className={collapseStyle} id='collapseExample'>
                {props.category.subCategories.map(subcategory => {
                    return <Link to={`categories/${props.category.slug}/${subcategory.slug}`} key={subcategory.name} className='ms-4 mb-0'>{subcategory.name}</Link>
                })}
            </div>
        </div>
    );
};

export default MyDropdown;