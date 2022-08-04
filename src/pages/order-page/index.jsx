import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import OrderItem from './components/order-item';
import BikeOrderContext from '../../contexts/bike-order-context';
import Cart from './components/cart';

const OrderPage = () => {
  const { orderItems } = React.useContext(BikeOrderContext);
  const footerDisplay = orderItems.length === 0 ? 'none' : 'flex';

  return (
    <Cart>
      <Typography
        variant="h5"
        sx={{
          pb: 3,
          borderBottom: '2px solid black',
        }}
      >
        {orderItems.length === 0 ? 'Užsakymas yra tuščias..' : 'Jūsu pasirinkti dviračiai..'}
      </Typography>
      <Box>
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
      <Box sx={{
        display: `${footerDisplay}`, justifyContent: 'space-between', pt: 3, justifySelf: 'flex-end',
      }}
      >
        <Box>
          <Typography variant="h6">Iš viso: </Typography>
          <Typography variant="body2">123.123$</Typography>
        </Box>
        <Button variant="contained">Tęsti</Button>
      </Box>

    </Cart>
  );
};
export default OrderPage;
