export const covertToUtcDate = (value: Date) => {
  const year = value.getFullYear();
  const month = value.getMonth();
  const date = value.getDate();

  const result = new Date(Date.UTC(year, month, date));

  return result;
};
