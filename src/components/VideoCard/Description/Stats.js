import React from 'react';
import moment from 'moment';
import 'moment/locale/fr'; // without this line it didn't work
import styled from 'styled-components';

import Eye from '../../../assets/eye.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-end;
  grid-row: 3;
  h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px 0 0;
    font-size: 12px;
    color: #949fbb;
  }
  @media (max-width: 800px) {
    justify-content: flex-end;
    h4 {
      display: none;
    }
  }
`;

const Icon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 6px;
`;

function Stats({ item }) {
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
    .locale('en')
    .fromNow();

  return (
    <Wrapper>
      <h4>
        <Icon src={Eye} /> 1 000 000
        {/* {formatViews(item.statistics.viewCount)} */}
      </h4>
      <h4>{formattedDate}</h4>
    </Wrapper>
  );
}

export default Stats;
