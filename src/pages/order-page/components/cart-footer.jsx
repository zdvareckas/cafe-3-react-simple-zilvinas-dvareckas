import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';

const CartFooter = ({ totalPrice }) => (
  <Box sx={{
    display: `${totalPrice === 0 ? 'none' : 'flex'}`,
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
);

export default CartFooter;
