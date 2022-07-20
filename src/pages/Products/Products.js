import React from "react";
import { useSelector } from "react-redux";
//import MockProducts from "../../data/products.json";
import ProductCard from "../../components/Product/ProductCard";
import { MainProductsContainer } from "./Products.styles";
import { selectAllProducts } from "../../redux/slices/productsSlice";

const Products = () => {
  const { products } = useSelector(selectAllProducts);
  //   const {
  //     data: { products },
  //   } = MockProducts;

  console.log("PRODS", products);

  return (
    <MainProductsContainer>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </MainProductsContainer>
  );
};

export default Products;
