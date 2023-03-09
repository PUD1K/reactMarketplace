import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ICategory } from '../../models/CategoryInterface';
import { componentsSlice } from '../../store/reducers/components/ComponentsSlice';
import MyDropdown from './MyDropdown';

interface CanvasInterface{
    show: boolean;
}

const MyCanvas = ({show}: CanvasInterface) => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    const {showCanvas} = useAppSelector(state => state.componentsReducer)
    const dispatch = useAppDispatch();

    const setHideCanvas = () => {
        dispatch(componentsSlice.actions.setHideCanvas());
    }

    useEffect(() => {
        const getAllCategories = async () => {
            const allCategoriesResponse = await axios.get('http://localhost:7000/categories')
            setCategories(allCategoriesResponse.data);
        }
        getAllCategories()
    }, []);

    const classStyle = `offcanvas offcanvas-start ${show? 'show' : 'hide'}`
    return (
        <div className={classStyle} aria-hidden='true' tabIndex={-1} id="offcanvasWithBothOptions" data-bs-backdrop='true' aria-labelledby="offcanvasWithBothOptionsLabel"  aria-modal='true' role='dialog' style={{visibility: 'visible', width:'300px'}}>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Категории</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Закрыть" onClick={() => setHideCanvas()}></button>
            </div>
            <div className="offcanvas-body">
                {categories.map((category) => (
                <MyDropdown
                key={category?.name}
                category={category}
                />
                ))}
            </div>
        </div>
    );
};

export default MyCanvas;