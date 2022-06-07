import { format } from 'date-fns';

export const formatTime = (date: number | undefined) => {
  if (date) {
    return format(new Date(date * 1000), 'kk:mm');
  }
};

export const formatDate = (date: string) => format(new Date(date), 'd MMM');
