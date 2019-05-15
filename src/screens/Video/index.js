import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Container from '../../components/Container';
import Loader from '../../components/Loader';
import VideoPlayer from '../../components/VideoPlayer';
import { useFetch } from '../../hooks';

import Comments from './Comments';
import RelatedVideos from './RelatedVideos';

import API from '../../api';
import {
  dummyRelatedVideos,
  dummyVideo,
  dummyVideoComments
} from '../../api/dummy-data';

const LeftContentWrapper = styled.div`
  width: 65vw;
`;

const RightContentWrapper = styled.div`
  padding-left: 20px;
  min-height: calc(100vh - 70px); /* 70px is <NavBar /> height */
  width: 35vw; /* because LeftContentWrapper is 65vw width */
`;

function Video({ match }) {
  const { videoId } = match.params;
  const videoDesc = useFetch('getVideoById', [videoId]);
  const videoComments = useFetch('getVideoComments', [videoId]);
  const relatedVideos = useFetch('getRelatedVideos', [videoId]);

  // const videoDesc = dummyVideo;
  // const videoComments = dummyVideoComments;
  // const relatedVideos = dummyRelatedVideos;

  // TODO get video statistics

  useEffect(() => {
    window.scrollTo(0, 0);
    if (videoDesc.length > 0) {
      document.title = `${videoDesc[0].snippet.title} - YouTube`;
    }
  }, [videoDesc, videoId]);

  const isLoading =
    videoDesc.length === 0 ||
    videoComments.length === 0 ||
    relatedVideos.length === 0;

  if (isLoading) return <Loader />;

  return (
    <Container>
      <LeftContentWrapper>
        <VideoPlayer item={videoDesc[0]} />
        <Comments items={videoComments} />
      </LeftContentWrapper>
      <RightContentWrapper>
        <RelatedVideos items={relatedVideos} />
      </RightContentWrapper>
    </Container>
  );
}

export default Video;
