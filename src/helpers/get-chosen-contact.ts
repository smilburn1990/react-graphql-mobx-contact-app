export const getDateTime = (id: string) => {
  const dateString =
    new Date().toString().slice(0, 10) +
    " " +
    new Date(new Date()).toString().split(" ")[4];

  return dateString;
};
