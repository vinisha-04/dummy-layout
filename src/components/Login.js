import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const Login = () => <Button>Sign In</Button>;

export default Login;
