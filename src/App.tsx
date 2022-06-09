import { createContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Info from './components/Info/Info';
import { IWeatherData, IForecastData, IDataContext } from './types';
import { API_KEY, DEFAULT_CITY, SERVER_URL, TIMESTAMPS_NUMBER } from './utils/consts';
import { getFromLocalStorage, saveToLocalStorage } from './utils/helpers';

export const DataContext = createContext<IDataContext | null>(null);

const initialCity: string = !getFromLocalStorage('city')
  ? DEFAULT_CITY
  : getFromLocalStorage('city');

function App() {
  const [weatherData, setCityData] = useState<IWeatherData | null>(null);
  const [forecastData, setForecastData] = useState<IForecastData | null>(null);
  const [city, setCity] = useState<string>(initialCity);

  useEffect(() => {
    fetch(`${SERVER_URL}weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          setCityData(data);
        } else {
          throw new Error(data.message);
        }
      })
      .catch(alert);

    fetch(`${SERVER_URL}forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=${TIMESTAMPS_NUMBER}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === '200') {
          setForecastData(data);
        } else {
          throw new Error(data.message);
        }
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
