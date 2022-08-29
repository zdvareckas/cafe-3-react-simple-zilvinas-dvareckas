const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'bikes';
const relationshipParams = '_expand=type&_expand=driver';

const fetchAll = async (searchParams = null) => {
  const urlSearchParams = searchParams ? `&${searchParams}` : '';
  const response = await fetch(`${domain}/${collectionName}?${relationshipParams}${urlSearchParams}`);
  const fetchedItems = await response.json();

  return fetchedItems;
};

export const bikeService = {
  fetchAll,
};
