import React from 'react';
import moment from 'moment';
import 'moment/locale/fr'; // without this line it didn't work
import styled from 'styled-components';

import Eye from '../../assets/eye.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, calc(auto / 5));
  padding: 6px 16px;
  h2,
  h3,
  h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    max-width: 100%;
  }
  h2 {
    grid-row: 1;
    font-size: 16px;
    font-weight: bold;
    color: #80a2ff;
  }
  h3 {
    grid-row: 2;
    font-size: 12px;
    font-weight: bold;
    color: #69718e;
  }
  h4 {
    color: #949fbb;
    font-size: 12px;
  }
  @media (max-width: 800px) {
    display: block;
    h2 {
      max-width: 100vw;
      margin: 10px 0 5px 0;
    }
    h4 {
      display: none;
    }
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-row: 5;
  h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
  }
  @media (max-width: 800px) {
    justify-content: flex-end;
  }
`;

const Icon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 6px;
`;

function Description({ item }) {
  function formatViews(views) {
    // ty https://stackoverflow.com/a/40724354
    const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

    const tier = (Math.log10(views) / 3) | 0;

    if (tier === 0) return views;

    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = views / scale;

    return scaled.toFixed(1) + suffix;
  }

  const formattedDate = moment(item.snippet.publishedAt)
    .locale('fr')
    .fromNow();

  return (
    <Wrapper>
      <h2 dangerouslySetInnerHTML={{ __html: item.snippet.title }} />
      <h3>{item.snippet.channelTitle}</h3>
      <Stats>
        <h4>
          <Icon src={Eye} />
          {formatViews(item.statistics.viewCount)}
        </h4>
        <h4>{formattedDate}</h4>
      </Stats>
    </Wrapper>
  );
}

export default Description;
