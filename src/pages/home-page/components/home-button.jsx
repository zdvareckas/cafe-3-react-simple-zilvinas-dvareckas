import * as React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomeButton = ({
  to,
  children,
  endIcon,
  variant,
  color,
}) => {
  const navigate = useNavigate();

  return (
    <Button
      size="large"
      variant={variant}
      endIcon={endIcon}
      color={color}
      onClick={() => navigate(`${to}`)}
      sx={{
        borderRadius: 6,
        color: 'common.white',
        borderColor: 'common.white',
      }}
    >
      {children}
    </Button>
  );
};

export default HomeButton;
