import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/contacts-page';
import HomePage from './pages/home-page';
import RentalBikesPage from './pages/rental-bikes-page';
import ContactContext from './contexts/contact-context';
import Navbar from './components/navbar';

const App = () => (
  <BrowserRouter>
    <ContactContext.Provider value={14}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rental-bikes" element={<RentalBikesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </ContactContext.Provider>
  </BrowserRouter>
);

export default App;
