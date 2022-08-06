import { FC } from 'react';
import { formatTime } from '../../../utils/helpers';
import { IWeatherData } from '../../../types';
import { useTypedSelector } from '../../../hooks/redux';
import { API } from '../../../services/api';
import { selectCurrentCity } from '../../../redux/currentCity/selectors';
import Preloader from '../../../ui/Preloader';
import Error from '../../../ui/Error';

const Details: FC = () => {
  const cityName = useTypedSelector(selectCurrentCity);
  const { data, error, isLoading } = API.useFetchWeatherQuery(cityName);

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    if ('data' in error) {
      return <Error message={error.data.message} />;
    }
    return <Error message="Something went wrong" />;
  }

  const { name, main, sys, timezone, weather } = data as IWeatherData;

  return (
    <div className="info__details">
      <h4 className="info__details-city">{name}</h4>
      <ul className="info__details-list">
        <li className="info__details-item">Temperature: {Math.round(main.temp)}°</li>
        <li className="info__details-item">Feels like: {Math.round(main.feels_like)}°</li>
        <li className="info__details-item">Weather: {weather[0].main}</li>
        <li className="info__details-item">Sunrise: {formatTime(sys.sunrise, timezone)}</li>
        <li className="info__details-item">Sunset: {formatTime(sys.sunset, timezone)}</li>
      </ul>
    </div>
  );
};

export default Details;
