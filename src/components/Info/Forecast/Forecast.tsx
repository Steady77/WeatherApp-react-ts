import { FC, useContext } from 'react';
import { DataContext } from '../../../App';
import { IDataContext } from '../../../types';
import ForecastItem from './ForecastItem';

const Forecast: FC = () => {
  const { forecastData } = useContext(DataContext) as IDataContext;

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="info__forecast">
      <h4 className="info__forecast-city">{forecastData.city.name}</h4>
      <div className="forecast-box__boxes">
        {forecastData.list.map((item) => (
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
