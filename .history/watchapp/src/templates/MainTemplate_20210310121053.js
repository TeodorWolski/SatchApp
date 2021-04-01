import React from 'react';
import GlobalStyle from 'themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/mainTheme';

const MainTemplate = () => (
  <>
    <ThemeProvider theme={theme} />
    <GlobalStyle />
  </>
);

export default MainTemplate;
