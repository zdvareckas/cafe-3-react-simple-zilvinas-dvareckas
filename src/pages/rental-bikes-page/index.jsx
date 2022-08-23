import * as React from 'react';
import BikeCard from './components/bike-card';
import Filter from './components/filter';
import { ItemsGrid } from './components';

const RentalBikesPage = () => {
  const [bikes, setBikes] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:8000/bikes?_expand=category&_expand=driver')
      .then((res) => res.json())
      .then((fetchedBikes) => setBikes(fetchedBikes));
  }, []);

  console.log(bikes);

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
