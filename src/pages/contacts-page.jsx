import React from 'react';
import RentalBikeContext from '../contexts/rental-bikes-context';

const ContactsPage = () => {
  const rentalBikeContext = React.useContext(RentalBikeContext);
  console.log('Contacts-page, contactContextValue', rentalBikeContext);

  return (
    <div>ContactsPage</div>
  );
};

export default ContactsPage;
