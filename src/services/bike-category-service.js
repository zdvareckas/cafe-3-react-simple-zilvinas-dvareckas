const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchAll = async () => {
  const response = await fetch(`${domain}/types`);
  const fetchedCategories = await response.json();

  return fetchedCategories;
};

const bikeCategoriesService = {
  fetchAll,
};

export default bikeCategoriesService;
