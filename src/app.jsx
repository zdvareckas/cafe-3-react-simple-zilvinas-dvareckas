import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/contacts-page';
import HomePage from './pages/home-page';
import RentalBikesPage from './pages/rental-bikes-page';
import Navbar from './components/navbar';
import ErrorPage from './pages/error-page';
import OrderPage from './pages/order-page';
import { OrderContext } from './contexts/bike-order-context';

const App = () => (
  <BrowserRouter>
    <OrderContext>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rental-bikes" element={<RentalBikesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </OrderContext>
  </BrowserRouter>
);

export default App;
