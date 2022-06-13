import { createContext, FC, useEffect, useState } from 'react';
import { IFavoriteListContext } from '../../types';
import { getFromLocalStorage, saveToLocalStorage } from '../../utils/helpers';
import Favorite from './Favorite/Favorite';
import Tabs from './Tabs/Tabs';

export const FavoriteListContext = createContext<IFavoriteListContext | null>(null);

const Info: FC = () => {
  const [favoriteList, setFavoriteList] = useState<Set<string>>(
    new Set(getFromLocalStorage('favorite')),
  );

  useEffect(() => {
    saveToLocalStorage('favorite', favoriteList);
  }, [favoriteList]);

  return (
    <div className="info">
      <FavoriteListContext.Provider value={{ favoriteList, setFavoriteList }}>
        <Tabs />
        <Favorite />
      </FavoriteListContext.Provider>
    </div>
  );
};

export default Info;
