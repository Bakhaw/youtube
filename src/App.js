import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Router from './Router';
import UpdateApp from './components/UpdateApp';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  body, ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <Router />
      <UpdateApp />
      <GlobalStyle />
    </>
  );
}

export default App;
