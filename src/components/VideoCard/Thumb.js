import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 140px;
  width: 240px;
  margin-right: 12px;
`;

function Thumb({ item }) {
  return <Image alt='Video thumbnail' src={item.snippet.thumbnails.high.url} />;
}

export default Thumb;
