import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/contacts-page';
import HomePage from './pages/home-page';
import RentalBikesPage from './pages/rental-bikes-page';
import ContactContext from './contexts/contact-context';
import Navbar from './components/navbar';
import ErrorPage from './pages/error-page';

const App = () => (
  <BrowserRouter>
    <ContactContext.Provider value={14}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rental-bikes" element={<RentalBikesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ContactContext.Provider>
  </BrowserRouter>
);

export default App;
