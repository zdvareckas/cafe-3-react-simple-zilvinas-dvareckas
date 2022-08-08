import { Box, styled } from '@mui/material';

const Cart = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: theme.spacing(10, 2, 2, 2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[200],
  borderRadius: 5,
}));

export default Cart;
