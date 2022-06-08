import { FC } from 'react';
import { IFavoriteItemProps } from '../../../types';

const FavoriteItem: FC<IFavoriteItemProps> = ({ city, setFavoriteList, favoriteList, setCity }) => {
  const deleteFromFavorite = () => {
    setFavoriteList(new Set(Array.from(favoriteList).filter((item) => item !== city)));
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
