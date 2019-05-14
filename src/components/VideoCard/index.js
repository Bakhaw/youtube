import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Thumb from './Thumb';
import Description from './Description';

const Wrapper = styled.div`
  display: flex;
  height: 160px;
  margin: 6px 0;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 10px 14px 0 rgba(0, 0, 0, 0.06);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    transform: scale(1.01);
  }
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    background: #fff;
    border-radius: 0;
  }
`;

function VideoCard({ item }) {
  return (
    <Link to={`/watch/${item.id.videoId || item.id}`}>
      <Wrapper>
        <Thumb item={item} />
        <Description item={item} />
      </Wrapper>
    </Link>
  );
}

export default VideoCard;
