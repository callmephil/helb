export const makeKeyOfObject = (obj) => JSON.stringify(obj);

export const isDesktop = () => {
  return window.innerWidth > 1024;
};

export const isTablet = () => {
  const width = window.innerWidth;
  return width <= 1024 && width > 640;
};

export const isMobile = () => {
  return window.innerWidth <= 640;
};

export const isMobileOrTablet = () => !isDesktop(); 
