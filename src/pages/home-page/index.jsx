import * as React from 'react'
import { Box, styled, Typography } from '@mui/material'
import ImageLink from './components/image-link';

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
  color: theme.palette.warning.light,
  padding: '20px'
}));


const HomePage = () => {
  return (
    <>
      <Background component='img' src='/hero.jpg' />
      <Content component='main'>
        <Typography component='h1' variant='h2' sx={{ textAlign: 'center', color: '#F9954E' }} >
          Dviračių nuoma sostinėje
        </Typography>
        <Typography variant='h6' sx={{ width: '600px', textAlign: 'center', color: 'black' }} >
          Kviečiame įmonių kolektyvus ir mažas grupes aktyviai leisti laisvalaikį lauke ir rinktis miesto ekskursijas dviračiais, kalnų dviračių turus arba žygius dviračiais Vilniuje.
        </Typography>
        <Box component='div' sx={{ width: '20%', display: 'flex', justifyContent: 'center', gap: 5, pt: 1 }}>
          <ImageLink text='Dviračiai' to='/rental-bikes' img='/home-card-img-1.jpg' />
          <ImageLink text='Susisiekite' to='/contacts' img='/home-card-img-2.jpg' />
        </Box>
      </Content >
    </>
  )
}

export default HomePage;
