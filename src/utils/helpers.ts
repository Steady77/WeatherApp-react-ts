import { format } from 'date-fns';
import { API_KEY, SERVER_URL } from './consts';

export const formatTime = (date: number, timezone?: number) => {
  if (timezone) {
    const shiftedTimeZone = timezone + new Date().getTimezoneOffset() * 60;
    const curDate = (date + shiftedTimeZone) * 1000;
    return format(new Date(curDate), 'kk:mm');
  }
  return format(new Date(date * 1000), 'kk:mm');
};

export const formatDate = (date: string) => format(new Date(date), 'd MMM');

export const saveToLocalStorage = (key: string, value: string[] | string) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const getFromLocalStorage = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    if (typeof data === 'string') {
      return JSON.parse(data);
    }
  } catch (error) {
    console.log(error);
    localStorage.setItem(key, '[]');
  }
};

export const getUrl = (city: string, type: string, timestamp = '') => {
  return `${SERVER_URL}${type}?q=${city}&appid=${API_KEY}&units=metric${timestamp}`;
};

export const statsCounter = (city: string) => {
  const stats: any = getFromLocalStorage('stats') ?? {};
  stats[city] = stats[city] ? stats[city] + 1 : 1;
  saveToLocalStorage('stats', stats);
};

const capitalizeFirstLetter = (str: string) => {
  return str[0].toUpperCase() + str.substring(1);
};

export const stringOfUniqueCities = (cities: string[]) => {
  const capitalized = cities.map((city) => capitalizeFirstLetter(city));
  const uniqueString = Array.from(new Set(capitalized)).join(', ');
  return uniqueString;
};

export const mostRequestedCity = (arr: any): any => {
  if (arr.length === 0) {
    return '';
  }
  const sorted = arr.sort((a: any, b: any) => b[1] - a[1]);
  const [city, count] = sorted[0];
  return [city, count];
};
