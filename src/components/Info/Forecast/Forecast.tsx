import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectForecastData } from '../../../redux/forecast/selectors';
import ForecastItem from './ForecastItem';

const Forecast: FC = () => {
  const forecastData = useSelector(selectForecastData);

  if (!forecastData) {
    return (
      <div
        className="info__now"
        style={{ fontSize: '22px', textAlign: 'center' }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div className="info__forecast">
      <h4 className="info__forecast-city">{forecastData.city.name}</h4>
      <div className="forecast-box__boxes">
        {forecastData.list.map((item: any) => (
          <ForecastItem
            key={item.dt}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
