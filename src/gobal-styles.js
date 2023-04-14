import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: inherit;
  }

  body,
  #__next {
    margin: 0;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: #F4F4F4;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
