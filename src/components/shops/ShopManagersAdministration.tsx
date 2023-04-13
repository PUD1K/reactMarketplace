import React, { FormEvent, useState, useEffect } from 'react';
import { IShop } from '../../models/ShopInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { localhostShop } from '../../variables/server';

interface ShopManagersAdministrationProps{
    shop: IShop,
    callbackSetState = () => void
}

const ShopManagersAdministration = ({shop} : ShopManagersAdministrationProps) => {
    const [username, setUsername] = useState('');
    const [checkedUsername, setCheckedUsername] = useState('')
    const [addedUsers, setAddedUsers] = useState<string []>([])
    const [searchManagerResult, setSearchManagerResult] = useState<Boolean | null>(null)

    const searchManager = async () => {
        const searchManagerData = {
            username,
            shopSlug: shop.slug
        }
        const searchManagerResponse = await axios.post(`${localhostShop}/search_manager`, searchManagerData)
        const searchManagerResponseData = searchManagerResponse.data;
        setSearchManagerResult(searchManagerResponseData)
        if(searchManagerResponseData){
            setCheckedUsername(username)
            console.log(username)
        }
    }

    const addManager = () => {
        setAddedUsers([...addedUsers, checkedUsername])
        setSearchManagerResult(null);
        setUsername('');
    }

    const sendEvent = () => {

    }

    useEffect(() => {

    }, [addedUsers])

    return (
        <div>
            <span>Список менеджеров:</span>
            {shop?.users?.map(user => {
                return <p><strong>{user.username}</strong></p>
            })}
            
            <h4>Добавить менеджера: </h4>
            <input className="form-control me-2 col-md-5" 
            type="search" 
            placeholder="Введите имя пользователя" 
            aria-label="Search"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <div className='mt-2 mb-2'>
                {searchManagerResult &&
                    <div>
                        <p>
                            <FontAwesomeIcon icon={faCheckCircle} style ={{color: 'green'}} /> 
                            Пользователь найден, вы можете добавить его в качестве менеджера
                        </p>
                        <button className="btn btn-primary" onClick={() => addManager()}>Добавить менеджера</button>
                    </div>
                }
                {!!addedUsers.length && 
                <div>
                    <span>Добавленные менеджеры:</span>
                    {addedUsers.map(addedUser => <p><strong>{addedUser}</strong></p>)}
                 </div>}
                {searchManagerResult === false &&
                    <div className='mt-2'>
                        <p>
                            <FontAwesomeIcon icon={faTimes} style ={{color: 'red'}} /> 
                            Пользователь не найден или уже является менеджером этого магазина
                        </p>
                    </div>
                }
            </div>
            <button className="btn btn-primary" onClick={() => searchManager()}>Поиск</button>
        </div>
    );
};

export default ShopManagersAdministration;