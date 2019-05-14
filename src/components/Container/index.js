import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 50px;
  min-height: calc(100vh - 70px); /* 70px is <NavBar /> height */
  max-width: 100vw;
  background: #ffeff6;
  @media (max-width: 800px) {
    padding: 0;
  }
`;

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
