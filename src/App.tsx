import { createContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Info from './components/Info/Info';
import { IWeatherData, IForecastData, IDataContext } from './types';
import { fetchData } from './utils/requests';
import { API_KEY, DEFAULT_CITY, SERVER_URL, TIMESTAMPS_NUMBER } from './utils/consts';
import { getFromLocalStorage, saveToLocalStorage } from './utils/helpers';

export const DataContext = createContext<IDataContext | null>(null);

const initialCity: string = !getFromLocalStorage('city')
  ? DEFAULT_CITY
  : getFromLocalStorage('city');

function App() {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [forecastData, setForecastData] = useState<IForecastData | null>(null);
  const [city, setCity] = useState<string>(initialCity);

  useEffect(() => {
    const weatherURL = `${SERVER_URL}weather?q=${city}&appid=${API_KEY}&units=metric`;
    const forecastURL = `${SERVER_URL}forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=${TIMESTAMPS_NUMBER}`;

    Promise.all([fetchData(weatherURL), fetchData(forecastURL)])
      .then(([weatherResp, forecastResp]) => {
        setWeatherData(weatherResp);
        setForecastData(forecastResp);
      })
      .catch(alert);

    saveToLocalStorage('city', city);
  }, [city]);

  return (
    <div className="container">
      <div className="weather">
        <Header setCity={setCity} />
        <DataContext.Provider value={{ weatherData, forecastData, setCity }}>
          <Info />
        </DataContext.Provider>
      </div>
    </div>
  );
}

export default App;
