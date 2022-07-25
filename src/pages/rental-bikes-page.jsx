import React from 'react';
import ContactContext from '../contexts/contact-context';

const RentalBikesPage = () => {
  const contactContext = React.useContext(ContactContext);
  console.log('Rental-Bikes-Page, ContactContextvalue', contactContext);

  return (
    <div>Rental-Bikes page</div>
  );
};

export default RentalBikesPage;
