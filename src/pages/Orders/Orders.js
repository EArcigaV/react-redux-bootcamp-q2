import React from "react";
import { useSelector } from "react-redux";

import OrderCard from "../../components/Order/OrderCard";
import { MainOrdersContainer } from "./Orders.styles";
import { selectOrder } from "../../redux/slices/ordersSlice";

const Orders = () => {
  const { order } = useSelector(selectOrder);
  //   const {
  //     data: { orders },
  //   } = Mockorders;

  console.log("ORDER", order);

  return (
    <MainOrdersContainer>
      <OrderCard order={order} key={order} />
    </MainOrdersContainer>
  );
};

export default Orders;
