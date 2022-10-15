import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Page = () => {
  return (
    <Container className="page">
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};

export default Page;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
