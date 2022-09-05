import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from '../pages/contacts-page';
import HomePage from '../pages/home-page';
import RentalBikesPage from '../pages/rental-bikes-page';
import ErrorPage from '../pages/error-page';
import OrderPage from '../pages/order-page';
import RegisterPage from '../pages/register-page';
import MainLayout from '../layouts/main-layout';
import AuthLayout from '../layouts/auth-layout';
import BikePage from '../pages/bike-page';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="rental-bikes" element={<RentalBikesPage />} />
      <Route path="contacts" element={<ContactsPage />} />
      <Route path="order" element={<OrderPage />} />
      <Route path="bike/:bikeId" element={<BikePage />} />

      <Route path="/auth/" element={<AuthLayout />}>
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
