import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    <section>
      <h1>제품 상세페이지</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
