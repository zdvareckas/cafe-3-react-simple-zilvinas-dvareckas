const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'bikes';
const relationshipParams = '_expand=category&_expand=driver';

const fetchAll = async () => {
  const response = await fetch(`${domain}/${collectionName}?${relationshipParams}`);
  const fetchedItems = await response.json();

  return fetchedItems;
};

export const bikeService = {
  fetchAll,
};
