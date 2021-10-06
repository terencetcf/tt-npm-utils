import isEmpty from 'lodash.isempty';

export const objectUtil = {
  isEmpty: (value?: SafeAny): boolean => {
    return (
      value === undefined ||
      value === NaN ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0) ||
      isEmpty(value)
    );
  },
};
