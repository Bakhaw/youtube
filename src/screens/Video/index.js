import React from 'react';
import styled from 'styled-components';

import Comments from '../../components/Comments';
import Container from '../../components/Container';
import VideoPlayer from '../../components/VideoPlayer';
import { dummyVideo, dummyVideoComments } from '../../api/dummy-data';
import { useFetch } from '../../hooks';

const LeftContentWrapper = styled.div`
  width: 62vw;
`;

const RightContentWrapper = styled.div`
  min-height: calc(100vh - 70px); /* 70px is <NavBar /> height */
  width: 38vw;
  border: 2px solid palevioletred;
`;

function Video({ match }) {
  const { videoId } = match.params;
  // const videoDesc = useFetch('getVideoById', [videoId]);
  // const videoComments = useFetch('getVideoComments', [videoId]);

  if (dummyVideo.length === 0) return <p>Loading!</p>;

  return (
    <Container>
      <LeftContentWrapper>
        <VideoPlayer item={dummyVideo[0]} />
        <Comments comments={dummyVideoComments} />
      </LeftContentWrapper>
      <RightContentWrapper />
    </Container>
  );
}

export default Video;
