import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Thumb from './Thumb';
import Description from './Description';

const Wrapper = styled.div`
  display: flex;
  height: {props => props.cardHeight};
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

// This one is insane 😍😍
const cardSizes = {
  small: {
    cardHeight: '70px',
    thumbWidth: '180px',
    videoTitleSize: '14px'
  },
  default: {
    cardHeight: '160px',
    thumbWidth: '260px',
    videoTitleSize: '16px'
  }
};

function VideoCard({ item, size = 'default' }) {
  const { cardHeight, thumbWidth, videoTitleSize } = cardSizes[size];
  return (
    <Link to={`/watch/${item.id.videoId || item.id}`}>
      <Wrapper cardHeight={cardHeight}>
        <Thumb item={item} thumbWidth={thumbWidth} />
        <Description item={item} videoTitleSize={videoTitleSize} />
      </Wrapper>
    </Link>
  );
}

export default VideoCard;
