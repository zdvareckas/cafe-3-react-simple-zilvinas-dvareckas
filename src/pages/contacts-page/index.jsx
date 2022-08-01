import {
  Box,
} from '@mui/material';
import * as React from 'react';
import { Form } from './components';
import ContactInfoSection from './components/contact-info-section';
import InformationSection from './components/personal-info-section';

const ContactsPage = () => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    pt: 5,
  }}
  >
    <Form component="form">
      <InformationSection />
      <ContactInfoSection />
    </Form>
  </Box>
);

export default ContactsPage;
