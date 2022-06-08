import { FC } from 'react';
import { IFavoriteProps } from '../../../types';
import FavoriteList from './FavoriteList';

const Favorite: FC<IFavoriteProps> = ({ favoriteList, setFavoriteList, setCity }) => {
  return (
    <div className="info__locations locations">
      <div>
        <h4 className="locations__title">Added Locations:</h4>
      </div>
      <FavoriteList
        setCity={setCity}
        favoriteList={favoriteList}
        setFavoriteList={setFavoriteList}
      />
    </div>
  );
};

export default Favorite;
