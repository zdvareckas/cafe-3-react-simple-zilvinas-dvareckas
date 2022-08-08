import * as React from 'react';

const BikeOrderContext = React.createContext();

export const OrderContext = ({ children }) => {
  const [orderItems, setOrderItems] = React.useState([]);

  const orderContextValue = React.useMemo(() => ({
    orderItems,
    addToOrder: (item) => {
      setOrderItems([...orderItems, item]);
    },
    deleteOrderItem: (item) => setOrderItems(
      orderItems.filter((x) => (x.customSizeID !== item.customSizeID)),
    ),
  }), [orderItems]);

  return (
    <BikeOrderContext.Provider value={orderContextValue}>
      {children}
    </BikeOrderContext.Provider>
  );
};

export default BikeOrderContext;
