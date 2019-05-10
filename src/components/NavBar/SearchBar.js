import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Svg from '../Svg';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  border: 1px solid #fff0f6;
  background: #fff0f6;
  border-radius: 0.25rem;
  input {
    margin: 0 5px;
    padding: 6px 0;
    height: 100%;
    width: 100%;
    background: #fff0f6;
    border: none;
    outline: none;
    color: #22292f;
    font-size: 16px;
  }
`;

function SearchBar({ history }) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.length === 0) return;

    history.push(`/search/${inputValue}`);
  }

  return (
    <div className='SearchBar'>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Svg type='search' />
          <input
            onChange={handleInputChange}
            placeholder='Search...'
            type='text'
            value={inputValue}
          />
        </InputWrapper>
      </form>
    </div>
  );
}

export default withRouter(SearchBar);
