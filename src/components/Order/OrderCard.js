import React from "react";
// import { useSelector } from "react-redux";
// import { selectOrder } from "../../redux/slices/ordersSlice";

export default function OrderCard({ order }) {
  // const order = useSelector(selectOrder);
  // console.log("ORDER", order);
  return (
    <div>
      <h1>Your Order was Completed ...</h1>
      Order #: {order}
    </div>
  );
}
