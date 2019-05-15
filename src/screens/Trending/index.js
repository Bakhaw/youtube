import React from 'react';

import Container from '../../components/Container';
import List from '../../components/List';
import Loader from '../../components/Loader';
import VideoCard from '../../components/VideoCard';
import { useFetch } from '../../hooks';

// import { dummyVideoList } from '../../api/dummy-data';

function Trending() {
  const data = useFetch('getTrendingVideos');
  const isLoading = !data || data.length === 0;

  if (isLoading) return <Loader />;

  return (
    <Container>
      <List columnWidth='60vw' items={data.items}>
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
