import React from 'react';
import ContactContext from '../contexts/contact-context';

const ContactsPage = () => {
  const contactContext = React.useContext(ContactContext);
  console.log('Contacts-page, contactContextValue', contactContext);

  return (
    <div>ContactsPage</div>
  );
};

export default ContactsPage;
