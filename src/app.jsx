import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import { OrderContext } from './contexts/bike-order-context';
import PageRoutes from './routes/page-routes';

const App = () => (
  <BrowserRouter>
    <OrderContext>
      <Navbar />
      <PageRoutes />
    </OrderContext>
  </BrowserRouter>
);

export default App;
