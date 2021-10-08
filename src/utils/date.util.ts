import moment from 'moment';

export const dateUtil = {
  now: (): Date => new Date(),
  format: (date: Date, format: string): string => moment(date).format(format),
};
