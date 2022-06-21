import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Info from '../components/Info/Info';
import Menu from '../components/Menu';
import { selectCurrentCity } from '../redux/currentCity/selectors';
import { setForecastData } from '../redux/forecast/actions';
import { AppDispatch } from '../redux/store';
import { setWeatherData } from '../redux/weather/actions';
import { FORECAST, TIMESTAMPS_NUMBER, WEATHER } from '../utils/consts';
import { getUrl, saveToLocalStorage, statsCounter } from '../utils/helpers';
import { fetchData } from '../utils/requests';

const Weather: FC = () => {
  const city = useSelector(selectCurrentCity);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const weatherURL = getUrl(city, WEATHER);
    const forecastURL = getUrl(city, FORECAST, TIMESTAMPS_NUMBER);

    fetchData(weatherURL)
      .then((data) => dispatch(setWeatherData(data)))
      .catch(alert);

    fetchData(forecastURL)
      .then((data) => dispatch(setForecastData(data)))
      .catch(alert);

    saveToLocalStorage('city', city);
    statsCounter(city);
  }, [city]);

  return (
    <>
      <Menu />
      <Header />
      <Info />
    </>
  );
};

export default Weather;
