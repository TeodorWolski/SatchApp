import React from 'react';
import TestView from 'views/TestView';
import GlobalStyle from 'themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <TestView />
    </ThemeProvider>
  </div>
);

export default Root;
