import * as React from 'react';
import BikeOrderContext from '../contexts/bike-order-context';

const OrderPage = () => {
  const order = React.useContext(BikeOrderContext);

  return (
    <pre>
      {JSON.stringify(order, null, 4)}
    </pre>
  );
};

export default OrderPage;
