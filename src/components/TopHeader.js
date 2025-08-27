import React from "react";
import BrandHeader from "./BrandHeader";
import Login from "./Login";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #f5f5f5;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TopHeader = () => {
  return (
    <Header>
      <BrandHeader />
      <Login />
    </Header>
  );
};

export default TopHeader;
