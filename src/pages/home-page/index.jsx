import * as React from 'react'
import Navbar from '../../components/navbar'
import { Box, styled, Typography } from '@mui/material'

const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});

const Content = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '80%',
  width: '100%',
  color: theme.palette.warning.light
}));


const HomePage = () => {
  return (
    <>
      <Background component='img' src='/hero.jpg' />
      <Navbar />
      <Content component='main'>
        <Typography component='h1' variant='h2' sx={{ textAlign: 'center' }} >
          Antano dviračių nuoma
        </Typography>
        <Typography variant='h6' sx={{ width: '36%', textAlign: 'center', color: 'black' }} >
          Kviečiame įmonių kolektyvus ir mažas grupes aktyviai leisti laisvalaikį lauke ir rinktis miesto ekskursijas dviračiais, kalnų dviračių turus arba žygius dviračiais Vilniuje.
        </Typography>
      </Content >
    </>
  )
}

export default HomePage;
