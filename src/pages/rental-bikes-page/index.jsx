import * as React from 'react';
import BikeCard from './components/bike-card';
import Filter from './components/filter';
import { ItemsGrid } from './components';
import { bikeService } from '../../services/bike-service';

const RentalBikesPage = () => {
  const [bikes, setBikes] = React.useState([]);

  const handleBikeFetch = async () => {
    const fetchedBikes = await bikeService.fetchAll();
    setBikes(fetchedBikes);
  };

  React.useEffect(() => {
    handleBikeFetch();
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
          price,
        }) => (
          <BikeCard
            key={id}
            id={id}
            title={title}
            description={description}
            category={category.label}
            img={img}
            sizes={sizes}
            driver={driver.label}
            price={price}
          />
        ))}
      </ItemsGrid>
    </>
  );
};

export default RentalBikesPage;
