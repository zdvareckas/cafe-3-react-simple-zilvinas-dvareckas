import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  padding: theme.spacing(0, 3),
  textDecoration: 'none',
  color: theme.palette.common.white,

  '&.active': {
    boxShadow: `inset 0 -3px 0 ${theme.palette.common.white}`,
  },

  ':hover': {
    boxShadow: `inset 0 -3px 0 ${theme.palette.common.white}`,
  },
}));
