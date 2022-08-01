import { Box, styled } from '@mui/material';

export const ItemsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 300px)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 300px)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 300px)',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(5, 300px)',
  },
  placeContent: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
}));
