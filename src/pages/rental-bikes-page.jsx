import React from 'react';
import Navbar from '../components/navbar';
import ContactContext from '../contexts/contact-context';

const RentalBikesPage = () => {
  const contactContext = React.useContext(ContactContext);
  console.log('Rental-Bikes-Page, ContactContextvalue', contactContext);

  return (
    <>
      <Navbar />
      <div>Rental-Bikes page</div>
    </>
  );
};

export default RentalBikesPage;
