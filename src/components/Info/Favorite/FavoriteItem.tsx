import { FC } from 'react';
import { useTypedDispatch } from '../../../hooks/redux';
import { setCurrentCity } from '../../../redux/currentCity/currentCitySlice';
import { deleteFavorite } from '../../../redux/favoriteList/favoriteSlice';
import { IFavoriteItemProps } from '../../../types';
import { statsCounter } from '../../../utils/helpers';

const FavoriteItem: FC<IFavoriteItemProps> = ({ city }) => {
  const dispatch = useTypedDispatch();

  const deleteFromFavorite = () => {
    dispatch(deleteFavorite(city));
  };

  const onClickCity = () => {
    statsCounter(city);
    dispatch(setCurrentCity(city));
  };

  return (
    <li className="locations__item">
      <span
        onClick={onClickCity}
        className="locations__item-text"
      >
        {city}
      </span>
      <button
        onClick={deleteFromFavorite}
        className="locations__item-close"
      ></button>
    </li>
  );
};

export default FavoriteItem;
