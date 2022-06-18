import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../../../redux/actions/favoriteList';
import { IFavoriteItemProps } from '../../../types';

const FavoriteItem: FC<IFavoriteItemProps> = ({ city, favoriteList, setCity }) => {
  const dispatch = useDispatch();
  const deleteFromFavorite = () => {
    const list = new Set(Array.from(favoriteList).filter((item) => item !== city));
    dispatch(setFavorite(list));
  };

  return (
    <li className="locations__item">
      <span
        onClick={() => setCity(city)}
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
