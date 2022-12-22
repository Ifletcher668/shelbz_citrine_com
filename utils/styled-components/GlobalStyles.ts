// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createGlobalStyle, css } from 'styled-components';

import reset from './_reset';
import variables from './_variables';

/* As a work around to prettier not supporting createGlobalStyle formatting,
    change 'createGlobalStyle' to 'css', format the file, then change it back to 'createGlobalStyle'
*/
const GlobalStyle = createGlobalStyle`
  /* TODO: This does not perform well in production. look into injecting another 'link' for this*/
  @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cormorant:ital,wght@0,400;0,500;1,300&display=swap');

  ${variables}
  ${reset}

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }

  body {
    background: var(--background);
    color: var(--font-primary);
    font-family: 'Cinzel Decorative', cursive;
  }

  a {
    font-size: var(--font-size, 1.125rem);
    text-transform: uppercase;
    text-decoration: none;

    /* TODO: figure out color */
    font-weight: 700;
    color: var(---link-primary);
    text-decoration: none;
    border: none;
    border-radius: 5px;
    background: none;
    padding: 0;
    border-radius: 0;
    width: fit-content;
    background-image: linear-gradient(
        transparent calc(100% - 1px),
        var(--link-accent) 1px
      ),
      linear-gradient(transparent calc(100% - 1px), #8398a3 1px);
    background-size: 0% 6px, 100% 6px;
    background-repeat: no-repeat;
    background-position: 0 bottom, 0 bottom;
    transition-property: background;
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;

    &:hover {
      text-decoration: none;
      color: var(---link-primary);
      cursor: pointer;
      background-size: 100% 6px, 100% 6px;
    }

    &:visited {
      color: var(---link-primary);
    }

    @media (prefers-reduced-motion) {
      transition: none;
    }
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  h6 {
    font-size: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.05vw;
  }
`;

export default GlobalStyle;