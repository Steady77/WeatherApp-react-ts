import { FC } from 'react';
import { INowProps } from '../../../types';
import HeartButton from './HeartButton/HeartButton';

const Now: FC<INowProps> = ({ cityData, setFavoriteList, favoriteList }) => {
  const hasData = cityData !== null;

  const addToFavorite = () => {
    if (cityData?.name) {
      setFavoriteList(new Set(favoriteList.add(cityData.name)));
    }
  };

  const removeFromFavorite = () => {
    if (cityData?.name) {
      setFavoriteList(new Set(Array.from(favoriteList).filter((item) => item !== cityData.name)));
    }
  };

  return (
    <div className="info__now">
      <p className="info__now-tepmerature">{hasData && Math.round(cityData?.main.temp)}</p>
      <img
        className="info__now-img"
        src={`http://openweathermap.org/img/wn/${cityData?.weather[0].icon}@4x.png`}
        alt="cloud"
      />
      <div className="info__now-bottom">
        <h4 className="info__now-city">{cityData?.name}</h4>
        {hasData && favoriteList.has(cityData.name) ? (
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
