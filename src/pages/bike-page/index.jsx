import React from 'react';
import { useParams } from 'react-router-dom';
import { bikeService } from '../../services/bike-service';

const BikePage = () => {
  const { bikeId } = useParams();
  const [bike, setBike] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await bikeService.fetchById(bikeId);
      setBike(response);
    })();
  }, [bikeId]);

  console.log(bikeId);

  return (
    <pre>{JSON.stringify(bike, null, 4)}</pre>
  );
};

export default BikePage;
