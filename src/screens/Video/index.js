import React, { useEffect } from 'react';
import styled from 'styled-components';

import Comments from '../../components/Comments';
import Container from '../../components/Container';
import List from '../../components/List';
import Loader from '../../components/Loader';
import VideoCard from '../../components/VideoCard';
import VideoPlayer from '../../components/VideoPlayer';
import { useFetch } from '../../hooks';

// import {
//   dummyRelatedVideos,
//   dummyVideo,
//   dummyVideoComments
// } from '../../api/dummy-data';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [videoId]);

  if (
    videoDesc.length === 0 ||
    videoComments.length === 0 ||
    relatedVideos.length === 0
  )
    return <Loader />;

  // TODO split this shit code :^)
  return (
    <Container>
      <LeftContentWrapper>
        <VideoPlayer item={videoDesc[0]} />
        <Comments comments={videoComments} />
      </LeftContentWrapper>
      <RightContentWrapper>
        <List columnWidth='100%' items={relatedVideos}>
          {item => (
            <li key={item.id.videoId}>
              <VideoCard item={item} size='small' />
            </li>
          )}
        </List>
      </RightContentWrapper>
    </Container>
  );
}

export default Video;
