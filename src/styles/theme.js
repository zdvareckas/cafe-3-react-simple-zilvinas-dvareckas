import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#74665F',
    },
    secondary: {
      main: '#64493B',
    },
  },
  background: {
    default: '#fafafa',
  },
  mixins: {
    navbar: {
      height: '64px',
    },
  },
});

export default theme;
