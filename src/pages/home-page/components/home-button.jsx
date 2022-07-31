import * as React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomeButton = ({ to, children, endIcon = null }) => {
  const navigate = useNavigate();

  return (
    <Button
      size="large"
      variant="contained"
      endIcon={endIcon}
      onClick={() => navigate(`${to}`)}
    >
      {children}
    </Button>
  );
};

export default HomeButton;
