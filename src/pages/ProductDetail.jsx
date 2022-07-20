import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const ProductDetail = () => {
  let { productId } = useParams();
  return (
    <ProductDetailStyled>
      <Navigation />
    </ProductDetailStyled>
  );
};

const ProductDetailStyled = styled.div``;
export default ProductDetail;
