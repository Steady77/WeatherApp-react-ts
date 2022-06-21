import { Dispatch, FC, SetStateAction } from 'react';

export interface IFavoriteItemProps {
  city: string;
}

export interface IHeartButtonProps {
  onClick: () => void;
  className: string;
}

export interface ITabProps {
  isSelected: boolean;
}

export interface ITabsNavProps {
  tabs: TabsType;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

type TabsType = Array<{
  name: string;
  component: FC<{}>;
}>;

type WeatherDataType = {
  icon: string;
  main: string;
};

export interface IWeatherData {
  timezone: number;
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

export type ForecastDataType = {
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
