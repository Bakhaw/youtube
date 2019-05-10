import React from 'react';
import moment from 'moment';
import 'moment/locale/fr'; // without this line it didn't work
import styled from 'styled-components';

const Wrapper = styled.div`
  h2,
  h3,
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px 0;
    max-width: calc(60vw - 260px); /* 80vw is <List /> wrapper width */
  }
  h2 {
    font-size: 18px;
    color: #0a0a0a;
  }
  h3,
  p {
    font-size: 13px;
    color: #606060;
  }
  @media (max-width: 800px) {
    h2 {
      max-width: 100vw;
      margin: 10px;
    }
    h3,
    p {
      display: none;
    }
  }
`;

const Row = styled.div`
  display: flex;
  h3 {
    margin-right: 5px;
  }
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
      <Row>
        <h3>{item.snippet.channelTitle}</h3>
        <h3>{formatViews(item.statistics.viewCount)} vues</h3>
        <h3>{formattedDate}</h3>
      </Row>
      <p>{item.snippet.description}</p>
    </Wrapper>
  );
}

export default Description;
