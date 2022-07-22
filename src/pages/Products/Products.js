import React from "react";
import MockProducts from "../../data/products.json";
import ProductCard from "../../components/Product/ProductCard";
import { MainProductsContainer } from "./Products.styles";

const Products = () => {
  const {
    data: { products },
  } = MockProducts;

  return (
    <MainProductsContainer>
      {products.items.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </MainProductsContainer>
  );
};

export default Products;
