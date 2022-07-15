import React from "react";
import { Column, Row } from "../../styles/components/general.styles";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { getTotal } from "../../pages/Cart/Cart";
import {
  ProductContainer,
  ProductDetailsContainer,
  StyledImg,
  DetailsWrapper,
  PriceContainer,
  PriceQuantityContainer,
  CustomButton,
} from "./CartCard.styles";

import { useDispatch } from "react-redux";
import { remove } from "../../redux/slices/cartSlice";

const CardofCart = ({ product, onQuantityChange }) => {
  const dispatch = useDispatch();
  //const products = useSelector(selectProducts);

  function handleRemove({ productId }) {
    dispatch(remove({ productId }));
    console.log("removed", productId);
  }

  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <ProductContainer>
      <ProductDetailsContainer>
        <StyledImg src={product.images[0]} alt="product_img" />
        <DetailsWrapper>
          <Typography variant="h6">{product.name}</Typography>
        </DetailsWrapper>
      </ProductDetailsContainer>
      <PriceQuantityContainer>
        <Row>
          <Column>
            <TextField
              defaultValue={1}
              onChange={(e) => onQuantityChange(e, product)}
              label="Quantity"
              type="number"
              inputProps={{ min: 0 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <CustomButton
              onClick={() => handleRemove({ productId: product.id })}
              variant="contained"
            >
              Remove {product.id}
            </CustomButton>
          </Column>
          <PriceContainer>
            <Typography>Price: </Typography>
            <Typography>{formattedPrice}</Typography>
          </PriceContainer>
          <PriceContainer>
            <Typography>Total: </Typography>
            <Typography align="right">
              ${getTotal(product.quantity, product.price).toFixed(2)}
            </Typography>
          </PriceContainer>
        </Row>
      </PriceQuantityContainer>
    </ProductContainer>
  );
};

export default CardofCart;
