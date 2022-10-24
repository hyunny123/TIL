import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  navigate("/welcome", { replace: true });
  return (
    <section>
      <h1>제품 리스트</h1>
      <ul>
        <li>
          <Link to="/products/p1">마들렌</Link>
        </li>
        <li>
          <Link to="/products/p2">휘낭시에</Link>
        </li>
        <li>
          <Link to="/products/p3">까눌레</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
