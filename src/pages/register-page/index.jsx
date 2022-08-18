import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import AuthForm from '../../components/auth-form';

const RegisterPage = () => (
  <AuthForm
    btnText="registracija"
    formElevation={3}
  >
    <Typography variant="h4" textAlign="center">Registracija</Typography>
    <TextField name="fullname" label="Vardas ir pavardė" />
    <Box sx={{ display: 'flex', gap: 1 }}>
      <TextField name="email" type="email" label="El. Paštas" />
      <TextField name="repeatemail" type="email" label="Pakartokite el. paštą" />
    </Box>
    <Box sx={{ display: 'flex', gap: 1 }}>
      <TextField name="password" type="password" label="Slaptažodis" />
      <TextField name="repeatpassword" type="password" label="Pakartokite slaptažodį" />
    </Box>
  </AuthForm>

);

export default RegisterPage;
