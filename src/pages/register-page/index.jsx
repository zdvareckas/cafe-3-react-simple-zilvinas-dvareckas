import React from 'react';
import {
  Box, Checkbox, FormControlLabel, MenuItem, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from '../../components/auth-form';

const RegisterPage = () => {
  const initialValues = {
    fullname: '',
    email: '',
    repeatEmail: '',
    password: '',
    repeatPassword: '',
    gender: '',
    newsLetter: false,
  };

  const validationSchema = yup.object({
    fullname: yup.string()
      .required('Privaloma')
      .min(6, 'Vardas ir Pavardė per trumpi'),
    email: yup.string()
      .required('Privaloma')
      .email('Netinkamas el. pašto formatas'),
    repeatEmail: yup.string()
      .required('Privaloma')
      .oneOf([yup.ref('email'), null], 'Nesutampa El. Paštas'),
    password: yup.string()
      .required('Privaloma')
      .min(8, 'Mažiausiai 8 simboliai')
      .matches(/[a-z]/, 'Bent viena mažoji raidė')
      .matches(/[A-Z]/, 'Bent viena didžioji raidė')
      .matches(/\d/, 'Bent vienas skaičius'),
    repeatPassword: yup.string()
      .required('Privaloma')
      .oneOf([yup.ref('password'), null], 'Nesutampa slaptažodis'),
    gender: yup.string()
      .required('Privaloma'),
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
    <AuthForm
      btnText="registracija"
      formElevation={3}
      onSubmit={handleSubmit}
      btnDisabled={!dirty || !isValid}
    >
      <Typography variant="h4" textAlign="center">Registracija</Typography>
      <TextField
        name="fullname"
        label="Vardas ir pavardė"
        value={values.fullname}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.fullname && Boolean(errors.fullname)}
        helperText={touched.fullname && errors.fullname}
      />
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          name="email"
          type="email"
          label="El. Paštas"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          name="repeatEmail"
          type="email"
          label="Pakartokite el. paštą"
          value={values.repeatEmail}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.repeatEmail && Boolean(errors.repeatEmail)}
          helperText={touched.repeatEmail && errors.repeatEmail}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          name="password"
          type="password"
          label="Slaptažodis"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <TextField
          name="repeatPassword"
          type="password"
          label="Pakartokite slaptažodį"
          value={values.repeatPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.repeatPassword && Boolean(errors.repeatPassword)}
          helperText={touched.repeatPassword && errors.repeatPassword}
        />
      </Box>
      <TextField
        select
        name="gender"
        label="Lytis"
        value={values.gender}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.gender && Boolean(errors.gender)}
        helperText={touched.gender && errors.gender}
      >
        <MenuItem value="Vyras">Vyras</MenuItem>
        <MenuItem value="Moteris">Moteris</MenuItem>
      </TextField>
      <FormControlLabel
        control={(
          <Checkbox
            name="newsLetter"
            value={values.newsLetter}
            onChange={handleChange}
          />
        )}
        label="Gauti naujienlaiškį"
      />
    </AuthForm>
  );
};

export default RegisterPage;
