import React from 'react';
import styled from 'styled-components';

import List from '../../components/List';

const Comment = styled.div`
  display: flex;
  margin: 10px 0;
  h3 {
    margin: 0 10px;
    font-size: 13px;
    font-weight: bold;
    color: #0a0a0a;
  }
  p {
    margin: 8px 10px;
    font-size: 14px;
    color: #111;
  }
  img {
    height: 40px;
    min-width: 40px;
    border-radius: 50%;
  }
`;

function Comments({ items }) {
  return (
    <List columnWidth='100%' items={items}>
      {item => {
        const {
          authorDisplayName,
          authorProfileImageUrl,
          textDisplay
        } = item.snippet.topLevelComment.snippet;
        console.log(item);
        return (
          <li key={item.id}>
            <Comment>
              <img
                alt={`${authorDisplayName} channel avatar`}
                src={authorProfileImageUrl}
              />
              <div>
                <h3>{authorDisplayName}</h3>
                <p dangerouslySetInnerHTML={{ __html: textDisplay }} />
              </div>
            </Comment>
          </li>
        );
      }}
    </List>
  );
}

export default Comments;
