import React from 'react';
import { Typography, Link } from '@mui/material';
import Image from '../../../components/image';


const ImageLink = ({ to, img, text }) => {
  return (
    <Link href={to} underline="none"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: '#F9954E',
        borderRadius: 3,
      }}>
      <Image sx={{ borderRadius: 15, width: '200px' }} src={img} />
      <Typography variant='h4' sx={{ color: 'white' }}>{text}</Typography>
    </Link>
  )
}

export default ImageLink;
