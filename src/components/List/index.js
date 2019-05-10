import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  margin: auto;
  li {
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 100vw;
    margin: 0;
  }
`;

function List({ children, items }) {
  return <Wrapper>{items.map(item => children(item))}</Wrapper>;
}

export default List;
