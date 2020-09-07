export const getTypeFromUrl = (url = "") => {
  try {
    const regex = /\.([A-z]*)\./;
    return url.match(regex)[1];
  } catch (e) {
    console.error(e.message);
    return 'unknown';
  }
};
