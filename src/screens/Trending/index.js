import React from 'react';

import Container from '../../components/Container';
import List from '../../components/List';
import Loader from '../../components/Loader';
import VideoCard from '../../components/VideoCard';
import { useFetch } from '../../hooks';

function Trending() {
  const data = useFetch('getTrendingVideos');

  if (!data || data.length === 0) return <Loader />;

  return (
    <Container>
      <List items={data.items}>
        {item => (
          <li key={item.id}>
            <VideoCard item={item} />
          </li>
        )}
      </List>
    </Container>
  );
}

export default Trending;
