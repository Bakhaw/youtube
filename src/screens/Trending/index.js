import React from 'react';
import styled from 'styled-components';

import Loader from '../../components/Loader';
import { useFetch } from '../../hooks';

const Thumb = styled.img`
  width: 250px;
`;

function Trending() {
  const { items } = useFetch('getPopularVideos');

  if (!items) return <Loader />;

  return (
    <div>
      <h1>Trending page</h1>
      <ul>
        {items.map(item => {
          // console.log(item.snippet.thumbnails);
          return (
            <li key={item.id}>
              <Thumb
                alt='Video thumbnail'
                src={item.snippet.thumbnails.standard.url}
              />
              <h2>{item.snippet.title}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Trending;
