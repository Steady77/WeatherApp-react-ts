import { FC } from 'react';
import ForecastItem from './ForecastItem';
import { IForecastProps } from '../../../types';

const Forecast: FC<IForecastProps> = ({ forecastData }) => {
  const hasData = forecastData !== null;

  return (
    <div className="info__forecast">
      <h4 className="info__forecast-city">{forecastData?.city.name}</h4>
      <div className="forecast-box__boxes">
        {hasData &&
          forecastData.list.map((item) => (
            <ForecastItem
              key={item.dt}
              item={item}
            />
          ))}
      </div>
    </div>
  );
};

export default Forecast;
