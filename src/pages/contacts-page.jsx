import React from 'react';
import Navbar from '../components/navbar';
import ContactContext from '../contexts/contact-context';

const ContactsPage = () => {
  const contactContext = React.useContext(ContactContext);
  console.log('Contacts-page, contactContextValue', contactContext);

  return (
    <>
      <Navbar />
      <div>ContactsPage</div>
    </>
  );
};

export default ContactsPage;
