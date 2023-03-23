import { Button, ButtonGroup } from 'react-bootstrap';
import {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { productsSlice } from '../../store/reducers/products/ProductsSlice';

const SizeSelector = () => {
  const { selectedSize } = useAppSelector(state => state.productsReducer)
  const dispatch = useAppDispatch();

  const handleSizeSelect = (size: string) => {
    dispatch(productsSlice.actions.setSize(size))
  };

  return (
    <div>
      <Button
        className='me-2'
        variant={selectedSize === 'S' ? 'primary' : 'outline-primary'}
        onClick={() => handleSizeSelect('S')}
      >
        S
      </Button>
      <Button
        className='me-2'
        variant={selectedSize === 'M' ? 'primary' : 'outline-primary'}
        onClick={() => handleSizeSelect('M')}
      >
        M
      </Button>
      <Button
        className='me-2'
        variant={selectedSize === 'L' ? 'primary' : 'outline-primary'}
        onClick={() => handleSizeSelect('L')}
      >
        L
      </Button>
      <Button
        className='me-2'
        variant={selectedSize === 'XL' ? 'primary' : 'outline-primary'}
        onClick={() => handleSizeSelect('XL')}
      >
        XL
      </Button>
    </div>
  );
};

export default SizeSelector