import { Dispatch, SetStateAction } from 'react';

export interface INowProps {
  cityData: ICityData | null;
}

export interface IDetailsProps {
  cityData: ICityData | null;
}

export interface IInfoProps {
  cityData: ICityData | null;
  forecastData: IForecastData | null;
}

export interface ITabsProps {
  cityData: ICityData | null;
  forecastData: IForecastData | null;
}

export interface IForecastProps {
  forecastData: IForecastData | null;
}

export interface IForecastItemProps {
  item: ForecastType;
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

export interface IForecastData {
  city: {
    name: string;
  };
  list: Array<ForecastType>;
}

export interface ICityData {
  message: string;
  name: string;
  cod: number;
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

type WeatherDataType = {
  icon: string;
  main: string;
};

type ForecastType = {
  main: {
    temp: number;
    feels_like: number;
  };
  dt: number;
  dt_txt: string;
  weather: Array<WeatherDataType>;
};
