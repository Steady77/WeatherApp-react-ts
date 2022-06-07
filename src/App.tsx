import { FC, useEffect, useState } from 'react';
import Header from './components/Header';
import Info from './components/Info/Info';
import { ICityData, IForecastData } from './types';
import {
  API_KEY,
  DEFAULT_CITY,
  SERVER_URL,
  TIMESTAMPS_NUMBER,
} from './utils/consts';

const App: FC = () => {
  const [cityData, setCityData] = useState<ICityData | null>(null);
  const [forecastData, setForecastData] = useState<IForecastData | null>(null);
  const [city, setCity] = useState(DEFAULT_CITY);

  useEffect(() => {
    fetch(`${SERVER_URL}weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => setCityData(data))
      .catch(alert);
  }, [city]);

  useEffect(() => {
    fetch(
      `${SERVER_URL}forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=${TIMESTAMPS_NUMBER}`,
    )
      .then((response) => response.json())
      .then((data) => setForecastData(data))
      .catch(alert);
  }, [city]);

  return (
    <div className="container">
      <div className="weather">
        <Header setCity={setCity} />
        <Info
          cityData={cityData}
          forecastData={forecastData}
        />
      </div>
    </div>
  );
};

export default App;
