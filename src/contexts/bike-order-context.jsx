import * as React from 'react';

const BikeOrderContext = React.createContext();

export const OrderContext = ({ children }) => {
  const [orderItems, setOrderItems] = React.useState([]);

  const orderContextValue = React.useMemo(() => ({
    orderItems,
    addToOrder: (item) => {
      setOrderItems([...orderItems, item]);
    },
    deleteOrderItem: (customSizeID) => setOrderItems(
      orderItems.filter((x) => (x.customSizeID !== customSizeID)),
    ),
    updateItemCount: ({ customSizeID, bikeCount }) => setOrderItems(
      orderItems
        .map((item) => (item.customSizeID === customSizeID
          ? { ...item, count: bikeCount } : item)),
    ),
  }), [orderItems]);

  return (
    <BikeOrderContext.Provider value={orderContextValue}>
      {children}
    </BikeOrderContext.Provider>
  );
};

export default BikeOrderContext;
