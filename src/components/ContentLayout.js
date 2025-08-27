import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: #e5e5e5;
`;

const Box = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex: ${(props) => (props.grow ? "1" : "none")};
`;

const RightCol = styled.div`
  flex: 1;
  padding: 1rem;
  background: white;
  border-left: 1px solid #ddd;
`;

const ContentLayout = () => {
  return (
    <Main>
      <LeftCol>
        <Box>Video Header Information</Box>
        <Box grow>Video</Box>
        <Box>Summary</Box>
      </LeftCol>
      <RightCol>Transcript</RightCol>
    </Main>
  );
};

export default ContentLayout;
