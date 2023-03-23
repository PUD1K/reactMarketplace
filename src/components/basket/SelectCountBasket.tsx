import axios from 'axios';
import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { IBasket } from '../../models/BasketInterface';
import { basketSlice } from '../../store/reducers/baskets/BasketSlice';
import { localhostProduct } from '../../variables/server';

interface BasketProps{
    item: IBasket,
    username: string
}

const SelectCountBasket = ({item,username} : BasketProps) => {
    const dispatch = useAppDispatch();

    const updateCartQty = async (item: IBasket, count: string) => {
        const numCount = Number(count)
        const addToBasketBody = {
          username,
          article: item.product.article,
          count: numCount,
          color: item.color.color,
          size: item.Size.size
        }
    
        const response = await axios.post(`${localhostProduct}/set_count_basket_product`, addToBasketBody);
        dispatch(basketSlice.actions.setCountBasket({...item, count: numCount}));
      }
    
    return (
        <div>
            <select
                className='form-select form-select-sm'
                style={{width: '65px'}}
                value={item.count}
                onChange={(e) =>updateCartQty(item, e.target.value)}
                >
                {[0,1,2,3,4,5,6,7,8,9].map((x) => (
                    <option key={x + 1} value={x + 1}>
                    {x + 1}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectCountBasket;