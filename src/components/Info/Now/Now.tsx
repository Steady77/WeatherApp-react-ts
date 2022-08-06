import { FC, useEffect, useState } from 'react';
import HeartButton from './HeartButton/HeartButton';
import { IWeatherData } from '../../../types';
import { selectFavoriteList } from '../../../redux/favoriteList/selectors';
import { API } from '../../../services/api';
import { selectCurrentCity } from '../../../redux/currentCity/selectors';
import { useTypedDispatch, useTypedSelector } from '../../../hooks/redux';
import Preloader from '../../../ui/Preloader';
import Error from '../../../ui/Error';
import { addFavorite, deleteFavorite } from '../../../redux/favoriteList/favoriteSlice';
import { statsCounter } from '../../../utils/helpers';

const Now: FC = () => {
  const dispatch = useTypedDispatch();
  const cityName = useTypedSelector(selectCurrentCity);
  const favoriteList = useTypedSelector(selectFavoriteList);
  const { data, error, isLoading, requestId, isSuccess } = API.useFetchWeatherQuery(cityName);
  const [prevId] = useState(requestId);

  useEffect(() => {
    if (prevId !== requestId && isSuccess) {
      statsCounter(name);
    }
  }, [requestId]);

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    if ('data' in error) {
      return <Error message={error.data.message} />;
    }
    return <Error message="Something went wrong" />;
  }

  const { name, main, weather } = data as IWeatherData;

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
