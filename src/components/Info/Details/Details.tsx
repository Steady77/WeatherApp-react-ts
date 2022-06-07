import { FC } from 'react';
import { IDetailsProps } from '../../../types';
import { formatTime } from '../../../utils/helpers';

const Details: FC<IDetailsProps> = ({ cityData }) => {
  const hasData = cityData !== null;

  return (
    <div className="info__details">
      <h4 className="info__details-city">{cityData?.name}</h4>
      <ul className="info__details-list">
        <li className="info__details-item">
          Temperature: {hasData && Math.round(cityData?.main.temp)}°
        </li>
        <li className="info__details-item">
          Feels like: {hasData && Math.round(cityData?.main.feels_like)}°
        </li>
        <li className="info__details-item">
          Weather: {cityData?.weather[0].main}
        </li>
        <li className="info__details-item">
          Sunrise: {formatTime(cityData?.sys.sunrise)}
        </li>
        <li className="info__details-item">
          Sunset: {formatTime(cityData?.sys.sunset)}
        </li>
      </ul>
    </div>
  );
};

export default Details;
