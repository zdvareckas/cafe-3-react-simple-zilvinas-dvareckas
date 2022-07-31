import * as React from 'react';
import {
  Box,
} from '@mui/material';
import BikeCard from './components/bike-card';
import Filter from './components/filter';
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
    <>
      <Filter />
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { sm: 'repeat(2, 300px)', md: 'repeat(3, 300px)', lg: 'repeat(4, 300px)' },
        gap: 2,
        mt: 10,
        placeContent: 'center',
      }}
      >
        {bikes.map(({
          id,
          title,
          description,
          category,
          img,
          sizes,
          driver,
        }) => (
          <BikeCard
            key={id}
            id={id}
            title={title}
            description={description}
            category={category}
            img={img}
            sizes={sizes}
            driver={driver}
          />
        ))}
      </Box>
    </>

  );
};

export default RentalBikesPage;
