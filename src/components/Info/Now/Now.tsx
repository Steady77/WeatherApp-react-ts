import { FC } from 'react';
import HeartButton from './HeartButton/HeartButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteFavorite, addFavorite } from '../../../redux/favoriteList/actions';
import { IWeatherData } from '../../../types';
import { selectWeatherData } from '../../../redux/weather/selectors';
import { selectFavoriteList } from '../../../redux/favoriteList/selectors';

const Now: FC = () => {
  const weatherData = useSelector(selectWeatherData);
  const favoriteList = useSelector(selectFavoriteList);
  const dispatch = useDispatch();

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

  const { name, main, weather } = weatherData as IWeatherData;

  const addToFavorite = () => {
    dispatch(addFavorite(name));
  };

  const removeFromFavorite = () => {
    dispatch(deleteFavorite(name));
  };

  return (
    <div className="info__now">
      <p className="info__now-tepmerature">{Math.round(main.temp)}</p>
      <img
        className="info__now-img"
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
        alt="cloud"
      />
      <div className="info__now-bottom">
        <h4 className="info__now-city">{name}</h4>
        {favoriteList.includes(name) ? (
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
