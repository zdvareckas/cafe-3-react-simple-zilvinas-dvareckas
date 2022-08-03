import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/contacts-page';
import HomePage from './pages/home-page';
import RentalBikesPage from './pages/rental-bikes-page';
import BikeOrderContext from './contexts/bike-order-context';
import Navbar from './components/navbar';
import ErrorPage from './pages/error-page';
import OrderPage from './pages/order-page';

const App = () => {
  const [orderItems, setOrderItems] = React.useState([]);

  const orderContextValue = React.useMemo(() => ({
    orderItems,
    addToOrder: (item) => {
      const isMatching = orderItems.find((x) => x.id === item.id && x.bikeSize === item.bikeSize);
      if (isMatching) {
        console.log('ID and Size matches');
      } else {
        setOrderItems([...orderItems, item]);
      }
    },
  }), [orderItems]);

  return (

    <BrowserRouter>
      <BikeOrderContext.Provider value={orderContextValue}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rental-bikes" element={<RentalBikesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BikeOrderContext.Provider>
    </BrowserRouter>
  );
};

export default App;
