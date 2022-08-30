import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import OrderItem from './components/order-item';
import BikeOrderContext from '../../contexts/bike-order-context';
import Cart from './components/cart';
import { bikeService } from '../../services/bike-service';

const fetchItem = async ({ id, bikeSize }) => {
  const item = await bikeService.fetchById(id);

  return {
    ...item,
    bikeSize,
    customSizeID: `${id}${bikeSize}`,
  };
};

const fetchOrderItems = async (orderItems) => {
  const items = await Promise.all(orderItems.map((item) => fetchItem(item)));
  const fetchedItemsWithCount = items.map((item) => ({
    ...item,
    count: orderItems
      .find((x) => x.customSizeID === item.customSizeID)?.count ?? 1,
  }));

  console.log(fetchedItemsWithCount);

  return fetchedItemsWithCount;
};

const OrderPage = () => {
  const { orderItems, deleteOrderItem } = React.useContext(BikeOrderContext);
  const [order, setOrder] = React.useState([]);

  const totalPrice = order
    .reduce((prevValue, { count, price }) => prevValue + (count * price), 0);

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
              customSizeID={customSizeID}
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
            <Typography variant="body2">
              {totalPrice}
              €
            </Typography>
          </Box>
          <Button variant="contained">Tęsti</Button>
        </Box>
      </Cart>
    </Box>
  );
};
export default OrderPage;
