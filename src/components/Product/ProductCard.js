import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {
  StyledCard,
  ButtonContainer,
  CustomButton,
} from "./ProductCard.styles";

import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { name, price, categories, images } = product;
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  function handleAdd({ productId }) {
    dispatch(add({ product }));
    console.log("added", productId);
  }

  return (
    <StyledCard>
      <CardMedia component="img" height="150" image={images[0]} alt={name} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle2">{categories[0]}</Typography>
        <Typography
          fontWeight="bold"
          mt={2}
          mb={2}
          align="right"
          variant="body2"
        >
          {formattedPrice}
        </Typography>
        <Divider light />
        <ButtonContainer>
          <CustomButton
            onClick={() => handleAdd({ productId: product.id })}
            fullWidth
            variant="contained"
          >
            Add to Cart
          </CustomButton>
        </ButtonContainer>
      </CardContent>
    </StyledCard>
  );
}
