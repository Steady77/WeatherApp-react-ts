import { FC } from 'react';
import { ForecastDataType } from '../../../types';
import { formatDate, formatTime } from '../../../utils/helpers';

const ForecastItem: FC<ForecastDataType> = ({ main, dt_txt, dt, weather }) => {
  return (
    <div className="info__forecast-box forecast-box">
      <div className="forecast-box__date">
        <p className="forecast-box__day">{formatDate(dt_txt)}</p>
        <p className="forecast-box__time">{formatTime(dt)}</p>
      </div>
      <div className="forecast-box__bottom">
        <ul className="forecast-box__list">
          <li className="forecast-box__item">Temperature: {Math.round(main.temp)}</li>
          <li className="forecast-box__item">Feels like: {Math.round(main.feels_like)}</li>
        </ul>
        <div className="forecast-box__weather">
          <p className="forecast-box__text">{weather[0].main}</p>
          <img
            className="forecast-box__img"
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default ForecastItem;
