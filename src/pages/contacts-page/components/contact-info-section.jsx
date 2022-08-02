import * as React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ContactField } from '.';

const contacts = [
  {
    id: '1',
    text: '+37061111111',
    icon: <CallIcon />,
  },
  {
    id: '2',
    text: 'antanodviračiai@dviračiai.lt',
    icon: <AlternateEmailIcon />,
  },
  {
    id: '3',
    text: 'M. K. Čiurlionio g. 100, Vilnius 03100',
    icon: <LocationOnIcon />,
  },

];

const ContactInfoSection = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  }}
  >
    <Typography variant="body2" align="left">
      Kontaktinė informacija
    </Typography>
    {contacts.map(({ id, text, icon }) => (
      <ContactField key={id}>
        {icon}
        {text}
      </ContactField>
    ))}

  </Box>
);

export default ContactInfoSection;
