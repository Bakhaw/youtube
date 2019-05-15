import React from 'react';
import styled from 'styled-components';

import Stats from './Stats';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, calc(auto / 5));
  padding: 6px 10px;
  h2,
  h3,
  h4 {
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
  h4 {
    color: #949fbb;
    font-size: 12px;
  }
  @media (max-width: 800px) {
    display: block;
    h2 {
      max-width: 100vw;
      margin: 10px 0 5px 0;
    }
    h4 {
      display: none;
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
      {/* <Stats item={item} /> */}
    </Wrapper>
  );
}

export default Description;
