import * as React from 'react';
import BikeCard from './components/bike-card';
import Filter from './components/filter';
import { ItemsGrid } from './components';

const RentalBikesPage = () => {
  const [bikes, setBikes] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:8000/bikes')
      .then((res) => res.json())
      .then((fetchedBikes) => setBikes(fetchedBikes));
  }, []);

  return (
    <>
      <Filter />
      <ItemsGrid>
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
      </ItemsGrid>
    </>
  );
};

export default RentalBikesPage;
