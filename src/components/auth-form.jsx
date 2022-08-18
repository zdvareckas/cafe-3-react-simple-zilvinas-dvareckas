import { Box, Button } from '@mui/material';
import React from 'react';

const AuthForm = ({
  btnText, btnDisabled, onSubmit, children,
}) => (
  <Box
    component="form"
    sx={{
      display: 'flex',
      gap: 2,
      flexDirection: 'column',
    }}
    onSubmit={onSubmit}
  >
    {children}
    <Button
      variant="contained"
      color="success"
      type="submit"
      disabled={btnDisabled}
    >
      {btnText}
    </Button>
  </Box>
);

export default AuthForm;
