import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/slices/cartSlice";

import { Link } from "react-router-dom";
import { CustomButton, CustomButtonR } from "./Cart.styles";
import {
  CartWrapper,
  SummaryItem,
  SummaryWrapper,
  ProductWrapper,
  DetailsContainer,
} from "./Cart.styles";

// Components
import Typography from "@mui/material/Typography";
import CardofCart from "../../components/Cart/CartCard";
import { useDispatch } from "react-redux";
import { reset, remove } from "../../redux/slices/cartSlice";

export const getTotal = (quantity = 1, price) => {
  return quantity * price;
};

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  function handleReset() {
    dispatch(reset([]));
  }

  function handleRemove({ productId }) {
    dispatch(remove({ productId }));
    console.log("removed", productId);
  }

  const handleQuantityChange = (e, product) => {
    e.preventDefault();
    console.log("Qty: ", e.target.value);

    const { value } = e.target;
    if (!value || value === "0") {
      products.filter((item) => item.id !== product.id);
      console.log("cero", value);
      handleRemove({ productId: product.id });
      return;
    }

    return value;
  };

  const newTotal = (items) =>
    items.reduce((acc, item) => acc + getTotal(item.quantity, item.price), 0);

  // const posts = [];
  return (
    <div>
      {products.length > 0 ? (
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
              {products.map((product, idx, id) => (
                <CardofCart
                  key={`${product.id}-${idx}`}
                  product={product}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
              <CustomButtonR
                onClick={handleReset}
                fullWidth
                variant="contained"
              >
                Empty Cart
              </CustomButtonR>
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
                  {products.length}
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
                  $ {newTotal(products).toFixed(2)}
                </Typography>
              </SummaryItem>
              <CustomButton
                // onClick={handleOrders}
                fullWidth
                variant="contained"
              >
                Checkout
              </CustomButton>
            </SummaryWrapper>
          </CartWrapper>
        </>
      ) : (
        <Typography mt={4} align="center" variant="h5">
          No items in your Cart yet.
          <br />
          Browse our
          <Link to="/products"> products section.</Link>
        </Typography>
      )}
    </div>
  );
}
