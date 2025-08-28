// LoginButton.js
import React from "react";
import styled from "styled-components";

// Styled button using CSS-in-JS
const StyledButton = styled.button`
  background-color: white;
  color: #0B8259;
  border: 1px solid green;
  border-radius: 8px;
  padding: 10px 20px;
  font-style: normal;
  font-size: 14px;
  font-weight: 400 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: green;
    color: white;
  }
`;

const Login = ({ label }) => {
  const handleClick = () => {
    window.location.href = "https://www.youtube.com/"; // redirect
  };

  return <StyledButton onClick={handleClick}>{label}</StyledButton>;
};

export default Login;
