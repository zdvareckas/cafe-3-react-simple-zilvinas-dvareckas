import * as React from 'react';
import {
  Box, Button, styled, Typography,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  // objectPosition: 'center',
  filter: 'brightness(60%)',
});

const Content = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  height: 400,
  width: '100%',
  color: theme.palette.common.white,
}));

const HomePage = () => (
  <>
    <Background component="img" src="/hero.jpg" />
    <Content component="main">
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
    </Content>
  </>
);

export default HomePage;
