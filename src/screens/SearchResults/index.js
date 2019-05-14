import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Container from '../../components/Container';
import List from '../../components/List';
import VideoCard from '../../components/VideoCard';

import API from '../../api';

// use this for dummy data instead of spamming api
// and comment useEffect()
// import dummyData from '../../api/dummy-data';

// const [data, setData] = useState([
//   ...dummyData,
//   ...dummyData,
//   ...dummyData,
//   ...dummyData
// ]);

function SearchResults({ match }) {
  const [data, setData] = useState([]);

  // ? We do this function to add statistics to each video because
  // ? YouTube API doesn't return video stats from the /search endpoint
  function mergeSearchResultsWithStats(queryResults, videoStats) {
    if (videoStats.items) {
      queryResults.items
        .filter(item => item.id.videoId)
        .map((item, index) => {
          const newItem = Object.assign(
            {},
            {
              ...item,
              statistics: videoStats.items[index].statistics
            }
          );
          return setData(data => [...data, newItem]);
        });
    }
  }

  useEffect(() => {
    async function getSearchResults(query) {
      await setData([]);
      const queryResults = await API.searchByQuery(query);

      let videoIds = '';
      queryResults.items
        .filter(item => item.id.videoId)
        .map(item => (videoIds += item.id.videoId + '%2C'));

      const videoStats = await API.getVideosByMultipleIds(videoIds);
      mergeSearchResultsWithStats(queryResults, videoStats);
    }

    getSearchResults(match.params.searchQuery);
  }, [match.params.searchQuery]);

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

export default withRouter(SearchResults);
