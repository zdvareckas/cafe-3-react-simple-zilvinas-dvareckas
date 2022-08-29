import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import BikeCard from './components/bike-card';
import Filter from './components/filter';
import { ItemsGrid } from './components';
import { bikeService } from '../../services/bike-service';

const RentalBikesPage = () => {
  const [bikes, setBikes] = React.useState([]);
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    (async () => {
      const fetchedBikes = await bikeService.fetchAll(searchParams.toString());
      setBikes(fetchedBikes);
    })();
  }, [searchParams]);

  return (
    <>
      <Filter />
      <ItemsGrid>
        {bikes.map(({
          id,
          title,
          description,
          type,
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
            type={type.label}
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
