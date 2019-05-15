import React from 'react';
import styled from 'styled-components';
import BottomBar from './BottomBar';

const Wrapper = styled.div`
  height: 70vh;
  width: 100%;
  iframe {
    height: calc(100% - 90px); /* 90px is <BottomBar/> height */
    width: 100%;
  }
  @media (max-width: 800px) {
    height: 33vh;
    width: 100vw;
  }
`;

function VideoPlayer({ item }) {
  return (
    <Wrapper>
      <iframe
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        frameBorder='0'
        src={`https://www.youtube.com/embed/${item.id}?autoplay=true`}
        title={`video-${item.id}`}
      />
      <BottomBar item={item} />
    </Wrapper>
  );
}

export default VideoPlayer;
