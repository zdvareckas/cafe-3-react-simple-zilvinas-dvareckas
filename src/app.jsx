import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ContactsPage from './pages/contacts-page';
import HomePage from './pages/home-page';
import RentalBikesPage from './pages/rental-bikes-page';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/rental-bikes' element={<RentalBikesPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
