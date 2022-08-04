import * as React from 'react';
import {
  Box,
  Divider,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BikeOrderContext from '../../../contexts/bike-order-context';

const OrderItem = ({
  id,
  title,
  bikeSize,
  price,
  category,
  img,
}) => {
  const { deleteOrderItem } = React.useContext(BikeOrderContext);
  const customSizeID = `${id}${bikeSize}`;

  return (
    <>
      <Box
        key={id}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pt: 1,
        }}
      >
        <Box
          component="img"
          src={img}
          sx={{ width: '240px' }}
        />
        <Box sx={{ p: 5, width: '200px' }}>
          <Typography>
            {title}
          </Typography>
          <Typography>
            {category}
          </Typography>
          <Typography>
            {bikeSize}
          </Typography>
        </Box>
        <Box sx={{ p: 4, width: '150px' }}>
          <TextField type="number" size="small" />
        </Box>
        <Box sx={{ p: 4 }}>
          <Typography>
            {price}
          </Typography>
        </Box>
        <Box sx={{ p: 4 }}>
          <Typography>
            Kainos suma
          </Typography>
        </Box>
        <IconButton onClick={() => deleteOrderItem({ customSizeID })}><DeleteIcon /></IconButton>
      </Box>
      <Divider sx={{ backgroundColor: 'grey.400' }} />

    </>
  );
};

export default OrderItem;
