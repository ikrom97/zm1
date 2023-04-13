import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: inherit;
  }

  body {
    margin: 0;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`;

export default GlobalStyles;
