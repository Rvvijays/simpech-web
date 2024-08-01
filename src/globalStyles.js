import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }

  a {
    color: #61dafb;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
