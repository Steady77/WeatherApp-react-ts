import { format } from 'date-fns';

export const formatTime = (date: number, timezone?: number) => {
  if (timezone) {
    const shiftedTimeZone = timezone + new Date().getTimezoneOffset() * 60;
    const curDate = (date + shiftedTimeZone) * 1000;
    return format(new Date(curDate), 'kk:mm');
  }
  return format(new Date(date * 1000), 'kk:mm');
};

export const formatDate = (date: string) => format(new Date(date), 'd MMM');

export const saveToLocalStorage = (key: string, value: Set<string> | string) => {
  try {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(Array.from(value)));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFromLocalStorage = (key: string, defaultValue: string = '0') => {
  try {
    return JSON.parse(localStorage.getItem(key) || defaultValue);
  } catch (error) {
    console.log(error);
    localStorage.setItem(key, '[]');
  }
};
