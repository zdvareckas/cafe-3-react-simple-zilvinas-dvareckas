import React from 'react';
import RentalBikeContext from '../../contexts/rental-bikes-context';

const RentalBikesPage = () => {
  const rentalBikeContext = React.useContext(RentalBikeContext);
  const [bikes, setBikes] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:8000/bikes')
      .then((res) => res.json())
      .then((fetchedBikes) => setBikes(fetchedBikes));
  }, []);

  console.log(bikes);
  console.log('RentalBikesPage, rentalBikeContextValue', rentalBikeContext);

  return (
    <div>Rental-Bikes page</div>
  );
};

export default RentalBikesPage;
