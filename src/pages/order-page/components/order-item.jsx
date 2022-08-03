import * as React from 'react';
import {
  Box,
  Divider,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const OrderItem = ({
  id, title, count, bikeSize, price, category, img,
}) => (
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
        <TextField value={count} type="number" size="small" />
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
      <IconButton><DeleteIcon /></IconButton>
    </Box>
    <Divider sx={{ backgroundColor: 'grey.400' }} />

  </>
);

export default OrderItem;
