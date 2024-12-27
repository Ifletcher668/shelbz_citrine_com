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

    transition-timing-function: ease-in-out;
    transition-duration: 750ms, 200ms;
    transition-property: color;

    &:hover {
      text-decoration: none;
      color: var(--font-secondary-accent);
      cursor: pointer;
    }
    

    @media (prefers-reduced-motion) {
      transition: none;
    }
  }

  p,button,h1,h2,h3,h4,h5,h6 {
    transition-timing-function: ease-in-out;
    transition-duration: 500ms, 200ms;
    transition-property: color;
  }

  small {
    font-size: var(--font-size-extra-small);
  }

  h1,h2,h3,h4,h5,h6 {
    color: var(--font-secondary);
  }

  h1,h2,h3,h4 {
    font-family: var(--font-cinzel-decorative);
  }

  h1 {
    font-size: var(--font-size-triple-extra-large);
    font-weight: 400;
  }

  h2 {
    font-size: var(--font-size-double-extra-large);
    font-weight: 400;
  }

  h3 {
    font-size: var(--font-size-extra-large);
    font-weight: 400;
  }

  h4 {
    font-size: var(--font-size-large);
    font-weight: 400;
  }

  h5 {
    font-size: var(--font-size-medium);
    font-weight: 400;
  }

  h6 {
    font-size: var(--font-size-extra-small);
    font-weight: 400;
  }

  p {
    font-size: var(--font-size-large);
    font-weight: 400;
    letter-spacing: 0.05vw;

    &::first-letter {
      font-size: var(--font-size-extra-large);
      font-weight: 400;
      margin-right: 2px;
      font-family: var(--font-cinzel-decorative);
    }
  }

  input,
  button,
  textarea,
  select,
  a {
    display: inline-block;

    outline: none;

    @media (pointer: fine) { 
        &:focus {
          border-radius: 5px;
          outline: 2px solid var(--font-secondary-accent);
        }
    }
  }
  
  .contentful-hr{
    margin: 0 auto;
    margin-top: 40px;
    width: 50%;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
  }

  .contentful-italic{
    color: var(--font-secondary-accent)
  }

  .contentful-underline {
    text-decoration: underline;

  }

  .contentful-bold-text {
    font-weight: bold;
    color: var(--font-secondary-accent);
  }
`;

export default GlobalStyle;
