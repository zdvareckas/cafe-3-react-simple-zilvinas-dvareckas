import * as React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ContactField } from '.';

const ContactInfoSection = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
    <Typography variant="body2" align="left">
      Kontaktinė informacija
    </Typography>
    <ContactField>
      <CallIcon />
      +37061111111
    </ContactField>
    <ContactField>
      <AlternateEmailIcon />
      antanodviračiai@dviračiai.lt
    </ContactField>
    <ContactField>
      <LocationOnIcon />
      M. K. Čiurlionio g. 100, Vilnius 03100
    </ContactField>
  </Box>
);

export default ContactInfoSection;
