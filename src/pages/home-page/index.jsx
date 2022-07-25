import * as React from 'react';
import {
  Box, Button, Typography,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as Home from './components';

const HomePage = () => (
  <>
    <Home.Background component="img" src="/hero.jpg" />
    <Home.Content component="main">
      <Typography
        component="h1"
        variant="h2"
        sx={{
          width: 550, textAlign: 'center', letterSpacing: 7,
        }}
      >
        Dviračių nuoma Vilniuje
      </Typography>
      <Typography
        variant="h6"
        sx={{
          width: 550, textAlign: 'center', letterSpacing: 2,
        }}
      >
        Kviečiame įmonių kolektyvus ir mažas grupes aktyviai leisti laisvalaikį
        lauke ir rinktis miesto ekskursijas dviračiais,
        kalnų dviračių turus arba žygius dviračiais Vilniuje.
      </Typography>
      <Box
        component="div"
        sx={{
          width: '20%', display: 'flex', justifyContent: 'center', gap: 5, pt: 1,
        }}
      >
        <Button size="large" variant="contained">Susisiekti</Button>
        <Button size="large" variant="contained" endIcon={<ArrowForwardIosIcon fontSize="small" />}>
          Dviračiai
        </Button>
      </Box>
    </Home.Content>
  </>
);

export default HomePage;
