import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin: 0;
    color: #606060;
    font-size: 14px;
  }
  svg {
    fill: #909090;
    height: 22px;
    width: 22px;
    margin-right: 5px;
  }
`;

function Actions({ item }) {
  function formatNumber(number) {
    // ty https://stackoverflow.com/a/40724354
    const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

    const tier = (Math.log10(number) / 3) | 0;

    if (tier === 0) return number;

    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;

    return scaled.toFixed(1) + suffix;
  }

  return (
    <Wrapper>
      <Tooltip title="J'aime ce contenu">
        <Button aria-label='Like'>
          <ThumbUpIcon />
          <h4>{formatNumber(item.statistics.likeCount)}</h4>
        </Button>
      </Tooltip>

      <Tooltip title="Je n'aime pas ce contenu">
        <Button aria-label='Dislike'>
          <ThumbDownIcon />
          <h4>{formatNumber(item.statistics.dislikeCount)}</h4>
        </Button>
      </Tooltip>
    </Wrapper>
  );
}

export default Actions;
