import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  div {
    color: #ff0000;
  }
`;

function Loader() {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
}

export default Loader;
