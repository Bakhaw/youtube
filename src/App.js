import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';

import Router from './Router';
import { theme } from './theme';
import UpdateApp from './components/UpdateApp';
import { AppProvider } from './context';

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
    <MuiThemeProvider theme={theme}>
      <AppProvider>
        <Router />
        <UpdateApp />
        <GlobalStyle />
      </AppProvider>
    </MuiThemeProvider>
  );
}

export default App;
