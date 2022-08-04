import { Box, styled } from '@mui/material';

const Cart = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  margin: theme.spacing(10, 2, 2, 2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[200],
  borderRadius: 5,
  minHeight: '50vh',
}));

export default Cart;
