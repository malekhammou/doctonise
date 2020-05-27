export const toIso = (dateObject) => {
  const date = new Date(
    `${dateObject.month.toString()}/${dateObject.day.toString()}/${dateObject.year.toString()}`
  );
  const isoDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  ).toISOString();
  return isoDate;
};
export const formatDate = (isoString) => {
  const dateArray = new Date(isoString)
    .toLocaleDateString()
    .toString()
    .split("/");
  return {
    day: parseInt(dateArray[1], 10),
    month: parseInt(dateArray[0], 10),
    year: parseInt(dateArray[2], 10),
  };
};
export default {
  toIso,
  formatDate,
};
