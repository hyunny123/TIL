import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <Head isDark={isDark}>
      <HeadTitle isDark={isDark}>hello {user}</HeadTitle>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isDark ? "black" : "skyblue")};
`;

const HeadTitle = styled.h2`
  color: ${(props) => (props.isDark ? "white" : "black")};
`;
