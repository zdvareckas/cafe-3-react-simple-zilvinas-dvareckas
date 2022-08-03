import * as React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import OrderItem from './components/order-item';
import BikeOrderContext from '../../contexts/bike-order-context';

const OrderPage = () => {
  const { orderItems } = React.useContext(BikeOrderContext);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: 1 / 2,
      ml: 10,
      mt: 20,
      p: 2,
      backgroundColor: 'grey.200',
      borderRadius: 5,
    }}
    >
      <Typography
        variant="h5"
        sx={{
          pb: 3,
          borderBottom: '2px solid black',
        }}
      >
        Jūsų užsakymo informacija..
      </Typography>
      {orderItems.map(({
        id, title, count, bikeSize, price, category, img,
      }) => (
        <OrderItem
          key={`${id}${bikeSize}`}
          id={id}
          title={title}
          count={count}
          bikeSize={bikeSize}
          price={price}
          category={category}
          img={img}
        />
      ))}

    </Box>
  );
};
export default OrderPage;
