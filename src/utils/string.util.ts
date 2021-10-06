export const stringUtil = {
  replaceAll: (
    value: string,
    textToFind: string,
    replaceWith: string,
  ): string => {
    return value.replace(new RegExp(textToFind, 'g'), replaceWith);
  },
};
