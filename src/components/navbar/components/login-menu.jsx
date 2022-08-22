import * as React from 'react';
import Menu from '@mui/material/Menu';
import { Box, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LoginForm from '../../login-form';

const LoginMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', alignSelf: 'center' }}>
      <IconButton
        onClick={handleClick}
        sx={{ color: 'common.white' }}
      >
        <PersonIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            p: 1,
          },
        }}
      >
        <LoginForm />
      </Menu>
    </Box>
  );
};

export default LoginMenu;
