import { FC, useContext } from 'react';
import { DataContext } from '../../../App';
import { IDataContext } from '../../../types';
import HeartButton from './HeartButton/HeartButton';
import { IFavoriteListContext } from '../../../types';
import { FavoriteListContext } from '../Info';

const Now: FC = () => {
  const { weatherData } = useContext(DataContext) as IDataContext;
  const { favoriteList, setFavoriteList } = useContext(FavoriteListContext) as IFavoriteListContext;

  if (!weatherData) {
    return (
      <div
        className="info__now"
        style={{ fontSize: '22px', textAlign: 'center' }}
      >
        Loading...
      </div>
    );
  }

  const addToFavorite = () => {
    setFavoriteList(new Set(favoriteList.add(weatherData.name)));
  };

  const removeFromFavorite = () => {
    setFavoriteList(new Set(Array.from(favoriteList).filter((item) => item !== weatherData.name)));
  };

  return (
    <div className="info__now">
      <p className="info__now-tepmerature">{Math.round(weatherData.main.temp)}</p>
      <img
        className="info__now-img"
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
        alt="cloud"
      />
      <div className="info__now-bottom">
        <h4 className="info__now-city">{weatherData.name}</h4>
        {favoriteList.has(weatherData.name) ? (
          <HeartButton
            onClick={removeFromFavorite}
            className={'info__now-favorite info__now-favorite--active'}
          />
        ) : (
          <HeartButton
            onClick={addToFavorite}
            className={'info__now-favorite'}
          />
        )}
      </div>
    </div>
  );
};

export default Now;
