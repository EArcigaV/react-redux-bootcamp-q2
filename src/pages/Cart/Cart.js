import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/slices/cartSlice";

import { Link, useHistory } from "react-router-dom";
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
import { reset, remove, updateProdTotal } from "../../redux/slices/cartSlice";

export const getTotal = (quantity = 1, price) => {
  return quantity * price;
};

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const history = useHistory();

  function handleReset() {
    dispatch(reset([]));
  }

  function handleRemove({ productId }) {
    dispatch(remove({ productId }));
    console.log("removed", productId);
  }

  const handleQtyChange = (e, productId) => {
    e.preventDefault();
    const { value } = e.target;
    const productQty = Number.parseInt(value);

    console.log("Qty: ", value);

    if (!value || value === "0") {
      products.filter((item) => item.id !== productId);
      console.log("cero", value);
      handleRemove({ productId: productId });
      return;
    }

    dispatch(updateProdTotal({ productId, quantity: productQty }));
  };

  const newTotal = (products) =>
    products.reduce(
      (acc, product) => acc + getTotal(product.quantity, product.price),
      0
    );

  function handleCheckout() {
    //dispatch(order());
    history.push("/orders");
    dispatch(reset());
  }

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
                  label="qty"
                  product={product}
                  onQuantityChange={(e) => handleQtyChange(e, product.id)}
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
                onClick={handleCheckout}
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
