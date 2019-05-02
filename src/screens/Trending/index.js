import React from 'react';

import Container from '../../components/Container';
import List from '../../components/List';
import Loader from '../../components/Loader';
import VideoCard from '../../components/VideoCard';
import { useFetch } from '../../hooks';

function Trending() {
  const { items } = useFetch('getTrendingVideos');

  if (!items) return <Loader />;

  return (
    <Container>
      <List items={items}>
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
