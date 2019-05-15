import React from 'react';

import List from '../../components/List';
import VideoCard from '../../components/VideoCard';

function RelatedVideos({ items }) {
  return (
    <List columnWidth='100%' items={items}>
      {item => (
        <li key={item.id.videoId}>
          <VideoCard item={item} size='small' />
        </li>
      )}
    </List>
  );
}

export default RelatedVideos;
