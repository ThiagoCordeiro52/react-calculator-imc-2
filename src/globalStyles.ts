import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFF;
    --background: #F2F3F5;

    --gray-100: #96a3ab;
    --gray-200: #6A7D8B;
    --gray-300: #3A4B5C;

    --text: #666;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --red: #C3423F;
    --green: #0EAD69;
    --yellow: #E2B039;
    --blue: #227C9D;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
  }

  html, body {
    height: 100vh;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; /* 15px */
    }
  }

  /* < tablet */
  @media (max-width: 720px) {
    html {
      font-size: 87.5%; /* 14px */
    }
  }

  body {
    background-color: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 16px Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
