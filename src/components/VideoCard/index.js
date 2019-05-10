import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Thumb from './Thumb';
import Description from './Description';

const Wrapper = styled.div`
  display: flex;
  margin: 6px 0;
  @media (max-width: 800px) {
    flex-direction: column;
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
