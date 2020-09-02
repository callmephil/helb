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

export const getSocialTypeFromUrl = (url) => {
  let _type = "unknown";
  if (typeof url === "string" && url !== "") {
    const types = ["twitter", "facebook", "instagram"];
    for (const type of types) {
      if (url.includes(type)) {
        _type = type;
      }
    }
  }
  return _type;
};