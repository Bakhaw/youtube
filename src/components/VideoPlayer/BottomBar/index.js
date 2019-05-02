import React from 'react';
import styled from 'styled-components';

import Actions from './Actions';

const Wrapper = styled.div`
  width: 100%;
  h2 {
    font-size: 18px;
    color: #0a0a0a;
  }
  h3 {
    margin: 0;
    color: #606060;
    font-size: 16px;
  }
  @media (max-width: 800px) {
    padding: 0 10px;
    width: calc(100% - 20px);
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function BottomBar({ item }) {
  return (
    <Wrapper>
      <h2>{item.snippet.title}</h2>
      <Row>
        <h3>{Number(item.statistics.viewCount).toLocaleString()} vues</h3>
        <Actions item={item} />
      </Row>
    </Wrapper>
  );
}

export default BottomBar;
