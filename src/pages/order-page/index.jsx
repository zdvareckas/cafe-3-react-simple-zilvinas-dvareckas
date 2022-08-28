import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import OrderItem from './components/order-item';
import BikeOrderContext from '../../contexts/bike-order-context';
import Cart from './components/cart';

const fetchItem = async ({ id, bikeSize }) => {
  const response = await fetch(`http://localhost:8000/bikes/${id}?_expand=type`);
  const item = await response.json();

  return {
    ...item,
    bikeSize,
    customSizeID: `${item.id}${bikeSize}`,
  };
};

const fetchOrderItems = async (orderItems) => {
  const items = await Promise.all(orderItems.map((item) => fetchItem(item)));

  return items;
};

const OrderPage = () => {
  const { orderItems, deleteOrderItem } = React.useContext(BikeOrderContext);
  const [order, setOrder] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fetchedBikes = await fetchOrderItems(orderItems);
      setOrder(fetchedBikes);
    })();
  }, [orderItems]);

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      p: 3,
    }}
    >
      <Cart>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{
            pb: 3,
            borderBottom: '2px solid white',
          }}
        >
          {orderItems.length === 0 ? 'Užsakymas yra tuščias..' : 'Jūsu pasirinkti dviračiai..'}
        </Typography>
        <Box>
          {order.map(({
            id, title, count, bikeSize, price, type, img, customSizeID,
          }) => (
            <OrderItem
              key={customSizeID}
              id={id}
              title={title}
              count={count}
              bikeSize={bikeSize}
              price={price}
              type={type}
              img={img}
              onDelete={() => deleteOrderItem(customSizeID)}
            />
          ))}
        </Box>
        <Box sx={{
          display: `${orderItems.length === 0 ? 'none' : 'flex'}`,
          justifyContent: 'space-between',
          pt: 1,
        }}
        >
          <Box>
            <Typography variant="h6">Iš viso: </Typography>
            <Typography variant="body2">123.123$</Typography>
          </Box>
          <Button variant="contained">Tęsti</Button>
        </Box>
      </Cart>
    </Box>
  );
};
export default OrderPage;
