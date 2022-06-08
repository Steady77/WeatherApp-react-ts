import { FC } from 'react';
import FavoriteItem from './FavoriteItem';
import { IFavoriteProps } from '../../../types';

const FavoriteList: FC<IFavoriteProps> = ({ favoriteList, setFavoriteList, setCity }) => {
  return (
    <ul className="locations__list">
      {Array.from(favoriteList).map((city: string) => (
        <FavoriteItem
          setCity={setCity}
          setFavoriteList={setFavoriteList}
          favoriteList={favoriteList}
          key={city}
          city={city}
        />
      ))}
    </ul>
  );
};

export default FavoriteList;
