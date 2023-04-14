import { createGlobalStyle, css } from 'styled-components';

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
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;

export const container = css`
  width: 100%;
  margin: 0 auto;
  max-width: 1128px;
`;
