import { FC, useEffect } from 'react';
import FavoriteItem from './FavoriteItem';
import { selectFavoriteList } from '../../../redux/favoriteList/selectors';
import { saveToLocalStorage } from '../../../utils/helpers';
import { useTypedSelector } from '../../../hooks/redux';

const FavoriteList: FC = () => {
  const favoriteList = useTypedSelector(selectFavoriteList);

  useEffect(() => {
    saveToLocalStorage('favorite', favoriteList);
  }, [favoriteList]);

  return (
    <ul className="locations__list">
      {favoriteList.map((city: string) => (
        <FavoriteItem
          key={city}
          city={city}
        />
      ))}
    </ul>
  );
};

export default FavoriteList;
