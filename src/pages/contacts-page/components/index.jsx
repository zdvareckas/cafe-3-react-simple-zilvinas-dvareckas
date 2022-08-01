import { Box, styled } from '@mui/material';

export { default as ContactField } from './contact-field';

export const Form = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(5),
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.spacing(5),
}));
