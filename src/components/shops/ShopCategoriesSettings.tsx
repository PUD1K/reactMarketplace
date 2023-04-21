import React, { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import CategoriesList from '../categories/CategorysList';
import { useNavigate } from 'react-router';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { localhostCategory } from '../../variables/server';
import { ICategory } from '../../models/CategoryInterface';
import { shopDataSlice } from '../../store/reducers/shop/ShopDataSlice';

const ShopCategoriesSettings = () => {
    const [showModal, setShowModal] = useState(false);
    const [freeCategories, setFreeCategories] = useState<ICategory[]>([]);
    const [addedCategory, setAddedCategory] = useState('');

    const { shop } = useAppSelector(state => state.shopDataReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        const getFreeCategories = async () => {
            const categoriesName = shop.categories.map(category => category.name);
            const freeCategoriesBody = { categories: JSON.stringify(categoriesName) }
            const freeCategoriesResponse = await axios.post(`${localhostCategory}/for_shop`, freeCategoriesBody);
            setFreeCategories(freeCategoriesResponse.data);
            if(freeCategoriesResponse.data[0]){
                setAddedCategory(freeCategoriesResponse.data[0].name)
            }
        }
        getFreeCategories()
    }, [shop])

    const addCategory = async () => {
        const addCategoryBody = {
            categoryName: addedCategory,
            shopName: shop.name
        }

        try{
            console.log()
            const addCategoryResponse = await axios.post<ICategory>(`${localhostCategory}/shop`, addCategoryBody);
            dispatch(shopDataSlice.actions.addCategory(addCategoryResponse.data))
        }
        catch(e){}
        setShowModal(false);
    }

    return (
        <div className=''>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>+ Добавить</button>
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Добавить категорию</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                freeCategories.length
                                ?
                                    <select className='form-select' onChange={(e: FormEvent) => setAddedCategory((e.target as HTMLInputElement).value)}>
                                        {freeCategories.map(category => {
                                            return <option value={category.name}>{category.name}</option>
                                        })}
                                    </select>
                                :
                                    <span>Вы уже добавили все категории</span>
                            }
                        </Modal.Body>
                        <Modal.Footer>
                            {(!!freeCategories.length && 
                                <Button variant="primary" onClick={() => addCategory()}>
                                    Добавить 
                                </Button>)}
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Закрыть
                            </Button>
                        </Modal.Footer>
                    </Modal>
                {
                    <div className='mt-3'>
                        <CategoriesList
                        categories={shop.categories}
                        />
                    </div>
                }
            </div>
    );
};

export default ShopCategoriesSettings;