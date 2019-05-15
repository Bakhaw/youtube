import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

import Container from '../Container';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    color: #f82076;
  }
`;

function Loader() {
  return (
    <Container>
      <Wrapper>
        <CircularProgress />
      </Wrapper>
    </Container>
  );
}

export default Loader;
