import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
  <Box sx={(theme) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: `calc(100vh - ${theme.mixins.navbar.height})`,
  })}
  >
    <Outlet />
  </Box>
);

export default AuthLayout;
