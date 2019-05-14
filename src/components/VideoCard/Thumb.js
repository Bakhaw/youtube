import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 100%;
  width: 260px;
  border-radius: 6px 0 0 6px;
  @media (max-width: 800px) {
    height: 250px;
    width: 100%;
    border-radius: 0;
  }
`;

function Thumb({ item }) {
  return <Image alt='Video thumbnail' src={item.snippet.thumbnails.high.url} />;
}

export default Thumb;
