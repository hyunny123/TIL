import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <Main isDark={isDark}>
      <Title isDark={isDark}>
        {user}님!
        <br />
        행복한 하루 되세요
      </Title>
    </Main>
  );
};

export default Content;

const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: ${(props) => (props.isDark ? "black" : "white")};
`;

const Title = styled.h2`
  color: ${(props) => (props.isDark ? "white" : "black")};
`;
