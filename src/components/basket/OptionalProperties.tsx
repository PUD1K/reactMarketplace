import React from 'react';
import { IBasket } from '../../models/BasketInterface';

interface BasketProps{
    item: IBasket,
}

const OptionalProperties = ({item} : BasketProps) => {
    return (
        <div>
            {
                !!item.Size 
            ?
                <p><span className="text-secondary">Размер: </span> {item.Size.size}</p>
            :   <></>
            }
            {
                !!item.color 
            ?
                <p><span className="text-secondary">Цвет: </span> {item.color.color}</p>
            :   <></>
            }
        </div>
    );
};

export default OptionalProperties;