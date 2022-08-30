const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'bikes';
const relationshipParams = '_expand=type&_expand=driver';

const fetchAll = async (searchParams = null) => {
  const urlSearchParams = searchParams ? `&${searchParams}` : '';
  const response = await fetch(`${domain}/${collectionName}?${relationshipParams}${urlSearchParams}`);
  const fetchedItems = await response.json();

  return fetchedItems;
};

const fetchById = async (id) => {
  const fetchedData = await fetch(`${domain}/${collectionName}/${id}?_expand=type`);
  const item = await fetchedData.json();

  return item;
};

export const bikeService = {
  fetchAll,
  fetchById,
};
