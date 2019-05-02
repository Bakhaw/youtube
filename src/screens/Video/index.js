import React from 'react';

import Container from '../../components/Container';
import VideoPlayer from '../../components/VideoPlayer';
import { useFetch } from '../../hooks';

function Video(props) {
  const { videoId } = props.match.params;
  const video = useFetch('getVideoById', [videoId]);

  if (video.length === 0) return <p>Loading!</p>;

  return (
    <Container>
      <VideoPlayer item={video[0]} />
    </Container>
  );
}

export default Video;
