import React from 'react';
import { Box } from '@mui/material';
import BikeCard from './components/bike-card';
// import RentalBikeContext from '../../contexts/rental-bikes-context';

const RentalBikesPage = () => {
  // const rentalBikeContext = React.useContext(RentalBikeContext);
  const [bikes, setBikes] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:8000/bikes')
      .then((res) => res.json())
      .then((fetchedBikes) => setBikes(fetchedBikes));
  }, []);

  // console.log('RentalBikesPage, rentalBikeContextValue', rentalBikeContext);

  return (
    <Box sx={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 300px)', gap: 2, mt: 10, placeContent: 'center',
    }}
    >
      {bikes.map(({
        id,
        title,
        description,
        category,
        img,
        sizes,
      }) => (
        <BikeCard
          id={id}
          title={title}
          description={description}
          category={category}
          img={img}
          sizes={sizes}
        />
      ))}
    </Box>
  );
};

export default RentalBikesPage;
