import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle`
*,*::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html {
    font-size: 62.5%;
}
body {
    padding-left: 150px;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
}
`;

export default GlobalStyle;
