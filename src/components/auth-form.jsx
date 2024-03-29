import { Button, Paper } from '@mui/material';
import React from 'react';

const AuthForm = ({
  btnText,
  btnDisabled,
  formElevation = 0,
  onSubmit,
  children,
}) => (
  <Paper
    component="form"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      p: 2,
    }}
    onSubmit={onSubmit}
    elevation={formElevation}
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
  </Paper>
);

export default AuthForm;
