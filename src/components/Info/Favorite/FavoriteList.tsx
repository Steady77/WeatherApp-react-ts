import { FC, useContext } from 'react';
import FavoriteItem from './FavoriteItem';
import { IDataContext } from '../../../types';
import { DataContext } from '../../../App';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const FavoriteList: FC = () => {
  const { setCity } = useContext(DataContext) as IDataContext;
  const favoriteList = useSelector((state: RootState) => state.favoriteList.items);

  return (
    <ul className="locations__list">
      {Array.from(favoriteList).map((city: string) => (
        <FavoriteItem
          setCity={setCity}
          favoriteList={favoriteList}
          key={city}
          city={city}
        />
      ))}
    </ul>
  );
};

export default FavoriteList;
