import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/mainTheme';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
