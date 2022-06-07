import { FC } from 'react';
import { IForecastItemProps } from '../../../types';
import { formatDate, formatTime } from '../../../utils/helpers';

const ForecastItem: FC<IForecastItemProps> = ({ item }) => {
  return (
    <div className="info__forecast-box forecast-box">
      <div className="forecast-box__date">
        <p className="forecast-box__day">{formatDate(item.dt_txt)}</p>
        <p className="forecast-box__time">{formatTime(item.dt)}</p>
      </div>
      <div className="forecast-box__bottom">
        <ul className="forecast-box__list">
          <li className="forecast-box__item">Temperature: {Math.round(item.main.temp)}</li>
          <li className="forecast-box__item">Feels like: {Math.round(item.main.feels_like)}</li>
        </ul>
        <div className="forecast-box__weather">
          <p className="forecast-box__text">{item.weather[0].main}</p>
          <img
            className="forecast-box__img"
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default ForecastItem;
