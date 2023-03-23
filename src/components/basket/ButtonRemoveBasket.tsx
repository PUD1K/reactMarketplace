import axios from 'axios';
import React from 'react';
import { Button } from "react-bootstrap";
import { useAppDispatch } from '../../hooks/redux';
import { IBasket } from '../../models/BasketInterface';
import { basketSlice } from '../../store/reducers/baskets/BasketSlice';
import { localhostProduct } from '../../variables/server';

interface BasketProps{
    item: IBasket,
    username: string
}

const ButtonRemoveBasket = ({item, username} : BasketProps) => {
    const dispatch = useAppDispatch()

    const removeFromCart = async (item: IBasket) => {
        const addToBasketBody = {
          username,
          article: item.product.article,
          color: item.color.color,
          size: item.Size.size
        }
    
        const response = await axios.post(`${localhostProduct}/remove_from_basket`, addToBasketBody);
        dispatch(basketSlice.actions.removeFromBasket(item));
      }

    return (
        <div>
            <Button
            type="button"
            variant="light"
            onClick={() => removeFromCart(item)}
            >
                <i className="fas fa-trash">Удалить</i>
            </Button>
        </div>
    );
};

export default ButtonRemoveBasket;