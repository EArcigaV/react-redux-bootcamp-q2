import React, { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../../data/products.json";
import {
  CartWrapper,
  SummaryItem,
  SummaryWrapper,
  ProductWrapper,
  DetailsContainer,
} from "./Cart.styles";
import { CustomButton } from "./Cart.styles";

// Components
import Typography from "@mui/material/Typography";
import CardofCart from "../../components/Cart/CartCard";

const {
  data: { products },
} = productsData;

const initialCartItems = [
  products.items[1],
  products.items[4],
  products.items[6],
  products.items[10],
];

export const getTotal = (quantity = 1, price) => {
  return quantity * price;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + getTotal(item.quantity, item.price), 0);

  const onQuantityChange = (event, product) => {
    console.log("Value: ", event.target.value);

    const { value } = event.target;
    if (!value || value === "0") {
      setCartItems(cartItems.filter((item) => item.id !== product.id));

      return;
    }
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === product.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: parseInt(event.target.value) }
            : item
        );
      }
    });
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        <>
          <Typography mt={4} align="center" variant="h4">
            Shopping Cart
          </Typography>
          <CartWrapper>
            <ProductWrapper>
              <DetailsContainer>
                <Typography mb={3} align="left" variant="h5">
                  Products Details
                </Typography>
              </DetailsContainer>
              {cartItems.map((product, idx) => (
                <CardofCart
                  key={`${product.id}-${idx}`}
                  product={product}
                  onQuantityChange={onQuantityChange}
                />
              ))}
            </ProductWrapper>
            <SummaryWrapper>
              <Typography gutterBottom component="p" variant="h5">
                Summary
              </Typography>
              <SummaryItem>
                <Typography gutterBottom component="p" variant="subtitle1">
                  Items:
                </Typography>
                <Typography gutterBottom component="p" variant="subtitle1">
                  {cartItems.length}
                </Typography>
              </SummaryItem>
              <SummaryItem>
                <Typography
                  fontWeight="bold"
                  gutterBottom
                  component="p"
                  variant="subtitle1"
                  width="200px"
                >
                  Total :
                </Typography>
                <Typography
                  fontWeight="bold"
                  gutterBottom
                  component="p"
                  variant="subtitle1"
                  width="100px"
                >
                  $ {calculateTotal(cartItems).toFixed(2)}
                </Typography>
              </SummaryItem>
              <CustomButton fullWidth variant="contained">
                Checkout
              </CustomButton>
            </SummaryWrapper>
          </CartWrapper>
        </>
      ) : (
        <Typography mt={4} align="center" variant="h5">
          No items in your Cart yet. Browse our
          <Link to="/products"> products section.</Link>
        </Typography>
      )}
    </div>
  );
};

export default Cart;
