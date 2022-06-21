import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCity } from '../../../redux/currentCity/actions';
import { deleteFavorite } from '../../../redux/favoriteList/actions';
import { IFavoriteItemProps } from '../../../types';

const FavoriteItem: FC<IFavoriteItemProps> = ({ city }) => {
  const dispatch = useDispatch();

  const deleteFromFavorite = () => {
    dispatch(deleteFavorite(city));
  };

  const onClickCity = () => {
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
