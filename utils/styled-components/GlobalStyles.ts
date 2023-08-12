// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createGlobalStyle, css } from 'styled-components';

import reset from './_reset';
import variables from './_variables';

/* As a work around to prettier not supporting createGlobalStyle formatting,
    change 'createGlobalStyle' to 'css', format the file, then change it back to 'createGlobalStyle'
*/
const GlobalStyle = createGlobalStyle`
  ${variables}
  ${reset}
  

  html {
    background: black;
  }

  body {
    color: var(--font-primary);
    font-family: var(--font-cormorant);
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: var(--font-secondary);
    text-decoration: none;
    border: none;
    padding: 0;
    border-radius: 0;
    width: fit-content;

    background-image: linear-gradient(
        transparent calc(100% - 2px),
        var(--font-accent) 2px
      ),
      linear-gradient(transparent calc(100% - 2px), var(--font-primary) 2px);
    background-size: 0% 6px, 100% 6px;
    background-repeat: no-repeat;
    background-position: 0 bottom, 0 bottom;
    
    transition-timing-function: ease-in-out;
    

    transition-duration: 500ms, 200ms;
    transition-property: background-size, color;
    

    &:hover {
      text-decoration: none;
      color: var(--font-accent);
      cursor: pointer;
      background-size: 100% 6px, 100% 6px;
    }
    

    @media (prefers-reduced-motion) {
      transition: none;
    }
  }

  h1,h2,h3,h4,h5,h6 {
    color: var(--font-secondary);
  }

  h1,h2,h3,h4 {
    font-family: var(--font-cinzel-decorative);
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 400;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 400;
  }

  h6 {
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.05vw;

    &::first-letter {
    font-size: 2rem;
    font-weight: 400;
    margin-right: 5px;
    font-family: var(--font-cinzel-decorative);
  }
  }

  input,
  button,
  textarea,
  select,
  a {
    outline: none;
    &:focus {
      border-radius: 5px;
      box-shadow: var(--focus-shadow);
    }
  }
`;

export default GlobalStyle;
