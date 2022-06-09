import { FC, useContext } from 'react';
import { formatTime } from '../../../utils/helpers';
import { DataContext } from '../../../App';
import { IDataContext } from '../../../types';

const Details: FC = () => {
  const { weatherData } = useContext(DataContext) as IDataContext;

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="info__details">
      <h4 className="info__details-city">{weatherData.name}</h4>
      <ul className="info__details-list">
        <li className="info__details-item">Temperature: {Math.round(weatherData.main.temp)}°</li>
        <li className="info__details-item">
          Feels like: {Math.round(weatherData.main.feels_like)}°
        </li>
        <li className="info__details-item">Weather: {weatherData.weather[0].main}</li>
        <li className="info__details-item">Sunrise: {formatTime(weatherData.sys.sunrise)}</li>
        <li className="info__details-item">Sunset: {formatTime(weatherData.sys.sunset)}</li>
      </ul>
    </div>
  );
};

export default Details;
