import * as React from 'react';
import Menu from '@mui/material/Menu';
import {
  Box, TextField, Button, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from '../../auth-form';

const LoginMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        </AuthForm>
        <Typography textAlign="center" variant="body1" sx={{ my: 2 }}>Arba</Typography>
        <Button
          href="/auth/register"
          fullWidth
          variant="contained"
        >
          Registruotis..
        </Button>
      </Menu>
    </Box>
  );
};

export default LoginMenu;
