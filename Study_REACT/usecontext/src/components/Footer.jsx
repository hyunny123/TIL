import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Foot isDark={isDark}>
      <Btn onClick={toggleTheme}>Darkmode</Btn>
    </Foot>
  );
};

export default Footer;

const Foot = styled.div`
  width: 100%;
  height: 80px;
  border-top: 2px solid gray;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => (props.isDark ? "white" : "black")};
  background-color: ${(props) => (props.isDark ? "black" : "skyblue")};
`;

const Btn = styled.button`
  padding: 10px;
  margin-right: 30px;
`;
