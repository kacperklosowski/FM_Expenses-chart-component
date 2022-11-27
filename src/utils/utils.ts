export const formatToAmericanDollar = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const getDayOfTheWeek = (day: number) => {
  const weekday = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  return weekday[day];
}