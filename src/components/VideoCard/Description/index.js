import React from 'react';
import styled from 'styled-components';

import Stats from './Stats';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 23px 23px 1fr;
  padding: 6px 10px;
  h2,
  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    max-width: 100%;
  }
  h3 {
    grid-row: 2;
    font-size: 12px;
    font-weight: bold;
    color: #69718e;
  }
  @media (max-width: 800px) {
    display: block;
    h2 {
      max-width: 100vw;
      margin: 10px 0 5px 0;
    }
  }
`;

const VideoTitle = styled.h2`
  grid-row: 1;
  font-size: ${props => props.videoTitleSize};
  font-weight: bold;
  color: #80a2ff;
`;

function Description({ item, videoTitleSize }) {
  return (
    <Wrapper>
      <VideoTitle
        dangerouslySetInnerHTML={{ __html: item.snippet.title }}
        videoTitleSize={videoTitleSize}
      />
      <h3>{item.snippet.channelTitle}</h3>
      <Stats item={item} />
    </Wrapper>
  );
}

export default Description;
