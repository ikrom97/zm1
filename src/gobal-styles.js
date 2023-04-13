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
  }
`;

export default GlobalStyles;
