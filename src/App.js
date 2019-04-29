import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';

import Router from './Router';
import { theme } from './theme';
import UpdateApp from './components/UpdateApp';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router />
      <UpdateApp />
      <GlobalStyle />
    </MuiThemeProvider>
  );
}

export default App;
