import React, { useContext, useEffect, useState } from 'react';

import Container from '../../components/Container';
import List from '../../components/List';
import VideoCard from '../../components/VideoCard';

import { AppContext } from '../../context';
import { useFetch } from '../../hooks';

function SearchResults() {
  const [data, setData] = useState([]);
  const { searchResults } = useContext(AppContext);

  let videoIds = '';
  searchResults.items
    .filter(item => item.id.videoId)
    .map(item => (videoIds += item.id.videoId + '%2C'));

  const videoStats = useFetch('getVideosByMultipleIds', [videoIds]);

  function populateResultsWithStats() {
    if (videoStats.items) {
      searchResults.items
        .filter(item => item.id.videoId)
        .map((item, index) => {
          const newItem = Object.assign(
            {},
            {
              ...item,
              statistics: videoStats.items[index].statistics
            }
          );
          setData(data => [...data, newItem]);
        });
    }
  }

  useEffect(() => {
    populateResultsWithStats();
  }, [videoStats]);

  return (
    <Container>
      <List items={data}>
        {item => (
          <li key={item.id.channelId || item.id.videoId}>
            <VideoCard item={item} />
          </li>
        )}
      </List>
    </Container>
  );
}

export default SearchResults;
