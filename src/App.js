import React from "react";
import TopHeader from "./components/TopHeader";
import ContentLayout from "./components/ContentLayout";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <TopHeader />
      <ContentLayout />
      <Footer />
    </AppWrapper>
  );
}

export default App;
