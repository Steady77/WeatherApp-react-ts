import { FC } from 'react';
import { formatTime } from '../../../utils/helpers';
import { useSelector } from 'react-redux';
import { IWeatherData } from '../../../types';
import { selectWeatherData } from '../../../redux/weather/selectors';

const Details: FC = () => {
  const weatherData = useSelector(selectWeatherData);

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

  const { name, main, sys, timezone, weather } = weatherData as IWeatherData;

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
