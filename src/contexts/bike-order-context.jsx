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
    updateItemCount: ({ customSizeID, bikeCount }) => {
      if (bikeCount > 0) {
        setOrderItems(
          orderItems
            .map((item) => (item.customSizeID === customSizeID
              ? { ...item, count: bikeCount } : item)),
        );
      } else {
        setOrderItems(orderItems.filter((item) => item.customSizeID !== customSizeID));
      }
    },
  }), [orderItems]);

  return (
    <BikeOrderContext.Provider value={orderContextValue}>
      {children}
    </BikeOrderContext.Provider>
  );
};

export default BikeOrderContext;
