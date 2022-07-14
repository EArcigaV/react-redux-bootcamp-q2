import styled from "styled-components";
import { styled as MUIStyled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Column, Row } from "../../styles/components/general.styles.js";

export const ProductContainer = styled(Row)`
  align-items: center;
  height: auto;
  padding-bottom: 30px;
  margin-top: 30px;
  border-bottom: 2px solid #e5e7eb;
  width: inherit;
`;

export const StyledImg = styled.img`
  height: 150px;
  width: 200px;
`;

export const ProductDetailsContainer = styled(Row)`
  flex: 1 1 0;
`;

export const DetailsWrapper = styled(Column)`
  justify-content: center;
  margin-left: 20px;
  height: auto;
`;

export const PriceQuantityContainer = styled(Column)`
  flex: 1 1 0;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  button {
    margin-top: 10px;
  }
`;

export const PriceContainer = styled(Column)`
  margin: 20px;
  
  }
`;

export const CustomButton = MUIStyled(Button)(() => ({
  backgroundColor: "lightBlue",
  "&:hover": {
    backgroundColor: "#FF0000",
  },
  borderRadius: "20px",
}));
