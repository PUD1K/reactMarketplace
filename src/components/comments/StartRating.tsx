import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ratingDataReducer } from '../../store/reducers/products/RatingSlice';



const StarRating = () => {
  const { rate } = useAppSelector(state => state.ratingReducer);
  const dispatch = useAppDispatch();

  const setRating = (val: number) => {
    dispatch(ratingDataReducer.actions.setRating(val))
  }

  return (
    <StarRatings
      rating={rate}
      // starRatedColor="(230, 67, 47)"
      starRatedColor="orange"
      changeRating={(val) => setRating(val)}
      numberOfStars={5}
      name='rating'
      starDimension="40px"
      starSpacing="10px"
      />
  );
};

export default StarRating;