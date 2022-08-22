import * as React from 'react';
import {
  TextField, Button, Box,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from './auth-form';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = yup.object({
    email: yup.string()
      .required('Privaloma')
      .email('Netinkamas El. Pašto formatas'),
    password: yup.string()
      .required('Privaloma')
      .min(8, 'Per trumpas slaptažodis'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const {
    values, dirty, errors, touched, isValid,
    handleSubmit, handleChange, handleBlur,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Box>
      <AuthForm
        btnDisabled={!dirty || !isValid}
        btnText="Prisijungti..."
        onSubmit={handleSubmit}
      >
        <TextField
          name="email"
          label="El. Paštas"
          size="small"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          name="password"
          label="Slaptažodis"
          size="small"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button
          href="/auth/register"
          fullWidth
          variant="contained"
          sx={{ order: 2 }}
        >
          Registruotis..
        </Button>
      </AuthForm>
    </Box>
  );
};

export default LoginForm;
