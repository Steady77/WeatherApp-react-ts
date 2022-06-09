import { Dispatch, SetStateAction } from 'react';

export interface IFavoriteListContext {
  setFavoriteList: Dispatch<SetStateAction<Set<string>>>;
  favoriteList: Set<string>;
}

export interface IDataContext {
  weatherData: IWeatherData | null;
  forecastData: IForecastData | null;
  setCity: Dispatch<SetStateAction<string>>;
}

export interface IFavoriteItemProps {
  setFavoriteList: Dispatch<SetStateAction<Set<string>>>;
  favoriteList: Set<string>;
  setCity: Dispatch<SetStateAction<string>>;
  city: string;
}

export interface IForecastItemProps {
  item: ForecastDataType;
}

export interface IHeartButtonProps {
  onClick: () => void;
  className: string;
}

export interface IHeaderProps {
  setCity: Dispatch<SetStateAction<string>>;
}

export interface ITabProps {
  isSelected: boolean;
}

export interface ITabsNavProps {
  tabs: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

type WeatherDataType = {
  icon: string;
  main: string;
};

export interface IWeatherData {
  message: string;
  name: string;
  cod: string | number;
  sys: {
    sunrise: number;
    sunset: number;
  };
  main: {
    temp: number;
    feels_like: number;
  };
  weather: Array<WeatherDataType>;
}

type ForecastDataType = {
  main: {
    temp: number;
    feels_like: number;
  };
  dt: number;
  dt_txt: string;
  weather: Array<WeatherDataType>;
};

export interface IForecastData {
  message: string;
  cod: string | number;
  city: {
    name: string;
  };
  list: Array<ForecastDataType>;
}
