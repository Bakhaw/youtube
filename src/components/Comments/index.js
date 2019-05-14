import React from 'react';
import styled from 'styled-components';

const Comment = styled.div`
  display: flex;
  margin: 20px 0;
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

function Comments({ comments }) {
  return (
    <ul>
      {comments.map(comment => {
        const {
          authorDisplayName,
          authorProfileImageUrl,
          textOriginal
        } = comment.snippet.topLevelComment.snippet;
        console.log(comment);
        return (
          <li key={comment.id}>
            <Comment>
              <img
                alt={`${authorDisplayName} channel avatar`}
                src={authorProfileImageUrl}
              />
              <div>
                <h3>{authorDisplayName}</h3>
                <p>{textOriginal}</p>
              </div>
            </Comment>
          </li>
        );
      })}
    </ul>
  );
}

export default Comments;
