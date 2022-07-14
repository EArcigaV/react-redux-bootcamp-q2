import styled from "styled-components";
import { styled as MUIStyled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const FormContainer = styled.div`
  width: 100%;
  align-items: center;
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  padding: 20px 50px;
  border-radius: "30px";
`;

export const CustomButton = MUIStyled(Button)(() => ({
  backgroundColor: "lightBlue",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#00c853",
    color: "#FFF",
  },
  borderRadius: "20px",
}));
