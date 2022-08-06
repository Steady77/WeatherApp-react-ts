import { FC } from 'react';
import { useTypedSelector } from '../../../hooks/redux';
import { selectCurrentCity } from '../../../redux/currentCity/selectors';
import { API } from '../../../services/api';
import { ForecastDataType, IForecastData } from '../../../types';
import Error from '../../../ui/Error';
import Preloader from '../../../ui/Preloader';
import ForecastItem from './ForecastItem';

const Forecast: FC = () => {
  const cityName = useTypedSelector(selectCurrentCity);
  const { data, error, isLoading } = API.useFetchForecastQuery(cityName);

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    if ('data' in error) {
      return <Error message={error.data.message} />;
    }
    return <Error message="Something went wrong" />;
  }

  const { city, list } = data as IForecastData;

  return (
    <div className="info__forecast">
      <h4 className="info__forecast-city">{city.name}</h4>
      <div className="forecast-box__boxes">
        {list.map((item: ForecastDataType) => (
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
