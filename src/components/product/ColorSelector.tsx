import { Button, ButtonGroup } from 'react-bootstrap';
import {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { productsSlice } from '../../store/reducers/products/ProductsSlice';

const ColorSelector = () => {
  const { selectedColor} = useAppSelector(state => state.productsReducer)
  const dispatch = useAppDispatch();

  const handleColorSelect = (color: string) => {
    dispatch(productsSlice.actions.setColor(color))
  };

  return (
    <div>
      <Button
        className='me-2'
        variant={selectedColor === 'Белый' ? 'light active' : 'light'}
        onClick={() => handleColorSelect('Белый')}
      >
        Белый
      </Button>
      <Button
        className='me-2'
        variant={selectedColor === 'Черный' ? 'dark' : 'outline-dark'}
        onClick={() => handleColorSelect('Черный')}
      >
        Черный
      </Button>
      <Button
        className='me-2'
        variant={selectedColor === 'Синий' ? 'primary' : 'outline-primary'}
        onClick={() => handleColorSelect('Синий')}
      >
        Синий
      </Button>
    </div>
  );
};

export default ColorSelector