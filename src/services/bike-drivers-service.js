const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchAll = async () => {
  const response = await fetch(`${domain}/drivers`);
  const fetchedDrivers = await response.json();

  return fetchedDrivers;
};

const bikeDriversService = {
  fetchAll,
};

export default bikeDriversService;
