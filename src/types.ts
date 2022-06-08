import { Dispatch, SetStateAction } from 'react';

export interface IHeartButtonProps {
  onClick: () => void;
  className: string;
}

export interface IDetailsProps {
  cityData: ICityData | null;
}

export interface INowProps extends IDetailsProps {
  setFavoriteList: Dispatch<SetStateAction<Set<string>>>;
  favoriteList: Set<string>;
}

export interface ITabsProps extends INowProps {
  forecastData: IForecastData | null;
}

export interface IInfoProps extends IDetailsProps {
  forecastData: IForecastData | null;
  setCity: Dispatch<SetStateAction<string>>;
}

export interface IForecastProps {
  forecastData: IForecastData | null;
}

export interface IFavoriteProps {
  favoriteList: Set<string>;
  setFavoriteList: Dispatch<SetStateAction<Set<string>>>;
  setCity: Dispatch<SetStateAction<string>>;
}

export interface IFavoriteItemProps extends IFavoriteProps {
  city: string;
}

export interface IForecastItemProps {
  item: ForecastDataType;
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
  list: Array<ForecastDataType>;
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

type ForecastDataType = {
  main: {
    temp: number;
    feels_like: number;
  };
  dt: number;
  dt_txt: string;
  weather: Array<WeatherDataType>;
};
