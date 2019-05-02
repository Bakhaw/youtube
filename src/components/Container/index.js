import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  min-height: calc(100vh - 70px);
  max-width: 100vw;
  @media (max-width: 800px) {
    padding: 0;
  }
`;

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
