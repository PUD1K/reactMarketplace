import React from 'react';
import StarRatings from 'react-star-ratings';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ratingDataReducer } from '../../store/reducers/products/RatingSlice';

const StarStatRating = (props: { totalRating: number}) => {
  const dispatch = useAppDispatch();

  return (
    <StarRatings
        rating={props.totalRating}
        starDimension="20px"
        starSpacing="5px"
        starRatedColor="orange"
      />
  );
};

export default StarStatRating;