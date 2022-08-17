import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

const MainLayout = () => (
  <Box sx={(theme) => ({ paddingTop: theme.mixins.navbar.height })}>
    <Navbar />
    <Outlet />
  </Box>
);

export default MainLayout;
