import React from 'react';
import styled from 'styled-components';
import BottomBar from './BottomBar';

const Wrapper = styled.div`
  height: 68.5vh;
  width: 65.5vw;
  iframe {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 800px) {
    height: 55.5vh;
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
        src={`https://www.youtube.com/embed/${item.id}`}
        title={`video-${item.id}`}
      />
      <BottomBar item={item} />
    </Wrapper>
  );
}

export default VideoPlayer;
