export const loadJSON = (url) => {
  return fetch(url)
    .then(response => response.json())
};

export const includesLow = (baseStr, searchStr) => {
  const baseStrLow = baseStr.toLowerCase();
  const searchStrLow = searchStr.toLowerCase();
  return baseStrLow.includes(searchStrLow);
};
