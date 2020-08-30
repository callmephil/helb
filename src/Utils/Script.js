export const getTypeFromUrl = (url = "") => {
  const regex = /\.([A-z]*)\./;
  return url.match(regex)[1];
};
