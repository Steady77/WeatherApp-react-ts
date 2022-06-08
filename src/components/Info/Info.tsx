import { FC, useEffect, useState } from 'react';
import { IInfoProps } from '../../types';
import { getFromLocalStorage, saveToLocalStorage } from '../../utils/helpers';
import Favorite from './Favorite/Favorite';
import Tabs from './Tabs/Tabs';

const Info: FC<IInfoProps> = ({ cityData, forecastData, setCity }) => {
  const [favoriteList, setFavoriteList] = useState<Set<string>>(
    new Set(getFromLocalStorage('favorite', '[]')),
  );

  useEffect(() => {
    saveToLocalStorage('favorite', favoriteList);
  }, [favoriteList]);

  return (
    <div className="info">
      <Tabs
        favoriteList={favoriteList}
        setFavoriteList={setFavoriteList}
        cityData={cityData}
        forecastData={forecastData}
      />
      <Favorite
        setCity={setCity}
        favoriteList={favoriteList}
        setFavoriteList={setFavoriteList}
      />
    </div>
  );
};

export default Info;
