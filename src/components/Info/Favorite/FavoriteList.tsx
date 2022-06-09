import { FC, useContext } from 'react';
import FavoriteItem from './FavoriteItem';
import { IDataContext, IFavoriteListContext } from '../../../types';
import { FavoriteListContext } from '../Info';
import { DataContext } from '../../../App';

const FavoriteList: FC = () => {
  const { favoriteList, setFavoriteList } = useContext(FavoriteListContext) as IFavoriteListContext;
  const { setCity } = useContext(DataContext) as IDataContext;

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
