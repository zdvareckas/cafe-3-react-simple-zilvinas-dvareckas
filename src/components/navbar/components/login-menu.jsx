import * as React from 'react';
import Menu from '@mui/material/Menu';
import {
  Box, TextField, Button, Typography,
} from '@mui/material';

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
    <Box sx={{ display: 'flex', alignSelf: 'strech' }}>
      <Button
        onClick={handleClick}
        sx={{ color: 'common.white' }}
      >
        Prisijungti
      </Button>
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
        <Box
          component="form"
          sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}
        >
          <TextField name="email" label="El. Paštas" size="small" />
          <TextField name="password" label="Slaptažodis" size="small" />
          <Button variant="contained" color="success" type="submit"> Prisijungti..</Button>
        </Box>
        <Typography textAlign="center" variant="body1" sx={{ my: 2 }}>Arba</Typography>
        <Button fullWidth variant="contained">Registruotis..</Button>
      </Menu>
    </Box>
  );
};

export default LoginMenu;
