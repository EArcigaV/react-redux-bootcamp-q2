import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {
  StyledCard,
  ButtonContainer,
  StyledButton,
} from "./ProductCard.styles";

export default function ProductCard({ product }) {
  const { name, price, categories, images } = product;
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

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
          <StyledButton fullWidth variant="contained">
            Add to Cart
          </StyledButton>
        </ButtonContainer>
      </CardContent>
    </StyledCard>
  );
}
