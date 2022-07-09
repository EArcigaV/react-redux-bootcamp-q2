import styled from "styled-components";

export const MainProductsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-template-rows: auto 1fr;
  grid-gap: 30px;
  justify-content: space-evenly;
  margin: 50px 30px 30px 250px;

  @media (max-width: 640px) {
    margin: 30px 0;
  }
`;
