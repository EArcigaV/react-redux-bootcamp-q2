import styled from "styled-components";
import { styled as MUIStyled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const FormContainer = styled.div`
  align-items: center;
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  padding: 20px 50px;
`;

export const CustomButton = MUIStyled(Button)(() => ({
  backgroundColor: "#203449",
  "&:hover": {
    backgroundColor: "#00c853",
  },
}));
