import { css } from 'styled-components';

const variables = css`
  /* Shared between color schemes */
  body {
    /* BASE THEME HUES */
    --blue-hue: 241deg;
    --green-hue: 177deg;
    --red-hue: 1deg;
    --orange-hue: 22deg;

    /* SPACING */
    --main-content-gap: 80px;
    --spacing-triple-extra-large: 56px;
    --spacing-double-extra-large: 48px;
    --spacing-extra-large: 40px;
    --spacing-large: 32px;
    --spacing-medium: 24px;
    --spacing-small: 18px;
    --spacing-extra-small: 16px;
    --spacing-double-extra-small: 8px;

    --size-moon: 400px;
    /* font-size */
    --font-size-double-extra-large: clamp(2rem, 6vw, 3rem);
    --font-size-extra-large: clamp(1.75rem, 4vw, 2rem);
    --font-size-large: clamp(1.375rem, 4vw, 1.75rem);
    --font-size-medium: clamp(1.125rem, 4vw, 1.375rem);
    --font-size-small: 1.125rem;
    --font-size-extra-small: 1rem;
    --font-size-double-extra-small: 0.875rem;

    /* MISC */
    --max-width-wrapper: min(960px, 92vw);
    --focus-shadow: 0 0 20px 2px var(--blue-300), 0 0 0 3px var(--blue-200);
    --border-radius: 12px;
  }

  [data-color-scheme='moon'] {
    --blue-50: hsl(calc(var(--blue-hue) + 5deg) 100% 95%);
    --blue-100: hsl(calc(var(--blue-hue) + 5deg) 95% 88%);
    --blue-200: hsl(var(--blue-hue) 95% 80%);
    --blue-300: hsl(var(--blue-hue) 95% 74%);
    --blue-400: hsl(var(--blue-hue) 90% 68%);
    --blue-500: hsl(var(--blue-hue) 20% 40%);
    --blue-600: hsl(var(--blue-hue) 20% 35%);
    --blue-700: hsl(var(--blue-hue) 20% 40%);
    --blue-800: hsl(var(--blue-hue) 20% 50%);
    --blue-900: hsl(var(--blue-hue) 20% 60%);
    --gradient-blue: linear-gradient(
      180deg,
      var(--blue-50) 0%,
      var(--blue-100),
      var(--blue-200),
      var(--blue-300),
      var(--blue-200),
      var(--blue-300),
      var(--blue-400),
      var(--blue-300),
      var(--blue-800),
      var(--blue-900)
    );
    --background: var(--black);
    --font-primary: var(--blue-50);
    --accent: var(--white);
    --accent-shadow: 0 0 30px 10px var(--blue-900);
    --link-primary: var(--white);
    --link-accent: var(--blue-600);
    --header-background: var(--blue-400);
    --disabled: var(--blue-900);
    /* Shadow for based on blue-400 */
    --shadow-color: var(--blue-hue) 90% 30%;
    --black: hsl(var(--blue-hue) 86%, 1%);
    --white: hsl(var(--blue-hue) 86% 100%);

    --shadow-elevation-medium: 0px 0.6px 0.5px hsl(var(--shadow-color) / 1),
      0px 2.3px 1.7px -2.5px hsl(var(--shadow-color) / 0.97),
      0.2px 14.6px 11px -5px hsl(var(--shadow-color) / 0.49);
  }

  [data-color-scheme='ocean'] {
    --blue-50: hsl(calc(var(--green-hue) + 5deg) 100% 95%);
    --blue-100: hsl(calc(var(--green-hue) + 5deg) 95% 88%);
    --blue-200: hsl(var(--green-hue) 95% 80%);
    --blue-300: hsl(var(--green-hue) 95% 74%);
    --blue-400: hsl(var(--green-hue) 90% 68%);
    --blue-500: hsl(var(--green-hue) 20% 40%);
    --blue-600: hsl(var(--green-hue) 20% 35%);
    --blue-700: hsl(var(--green-hue) 20% 40%);
    --blue-800: hsl(var(--green-hue) 20% 50%);
    --blue-900: hsl(var(--green-hue) 20% 60%);
    --gradient-blue: linear-gradient(
      180deg,
      var(--blue-50) 0%,
      var(--blue-100),
      var(--blue-200),
      var(--blue-300),
      var(--blue-200),
      var(--blue-300),
      var(--blue-400),
      var(--blue-300),
      var(--blue-800),
      var(--blue-900)
    );
    --background: var(--black);
    --font-primary: var(--blue-50);
    --accent: var(--white);
    --accent-shadow: 0 0 30px 10px var(--blue-900);
    --link-primary: var(--white);
    --link-accent: var(--blue-600);
    --header-background: var(--blue-400);
    --disabled: var(--blue-900);
    --shadow-color: var(--green-hue) 90% 30%;
    --black: hsl(var(--green-hue) 86%, 1%);
    --white: hsl(var(--green-hue) 86% 100%);

    --shadow-elevation-medium: 0px 0.6px 0.5px hsl(var(--shadow-color) / 1),
      0px 2.3px 1.7px -2.5px hsl(var(--shadow-color) / 0.97),
      0.2px 14.6px 11px -5px hsl(var(--shadow-color) / 0.49);
  }

  [data-color-scheme='bloodMoon'] {
    --blue-50: hsl(calc(var(--red-hue) + 5deg) 100% 95%);
    --blue-100: hsl(calc(var(--red-hue) + 5deg) 95% 88%);
    --blue-200: hsl(var(--red-hue) 95% 80%);
    --blue-300: hsl(var(--red-hue) 95% 74%);
    --blue-400: hsl(var(--red-hue) 90% 68%);
    --blue-500: hsl(var(--red-hue) 20% 40%);
    --blue-600: hsl(var(--red-hue) 20% 35%);
    --blue-700: hsl(var(--red-hue) 20% 40%);
    --blue-800: hsl(var(--red-hue) 20% 50%);
    --blue-900: hsl(var(--red-hue) 20% 60%);
    --gradient-blue: linear-gradient(
      180deg,
      var(--blue-50) 0%,
      var(--blue-100),
      var(--blue-200),
      var(--blue-300),
      var(--blue-200),
      var(--blue-300),
      var(--blue-400),
      var(--blue-300),
      var(--blue-800),
      var(--blue-900)
    );
    --background: var(--black);
    --font-primary: var(--blue-50);
    --accent: var(--white);
    --accent-shadow: 0 0 30px 10px var(--blue-900);
    --link-primary: var(--white);
    --link-accent: var(--blue-600);
    --header-background: var(--blue-400);
    --disabled: var(--blue-900);
    /* Shadow for based on blue-400 */
    --shadow-color: var(--red-hue) 90% 30%;
    --black: hsl(var(--red-hue) 86%, 1%);
    --white: hsl(var(--red-hue) 86% 100%);

    --shadow-elevation-medium: 0px 0.6px 0.5px hsl(var(--shadow-color) / 1),
      0px 2.3px 1.7px -2.5px hsl(var(--shadow-color) / 0.97),
      0.2px 14.6px 11px -5px hsl(var(--shadow-color) / 0.49);
  }

  [data-color-scheme='harvestMoon'] {
    --blue-50: hsl(calc(var(--orange-hue) + 5deg) 100% 95%);
    --blue-100: hsl(calc(var(--orange-hue) + 5deg) 95% 88%);
    --blue-200: hsl(var(--orange-hue) 95% 80%);
    --blue-300: hsl(var(--orange-hue) 95% 74%);
    --blue-400: hsl(var(--orange-hue) 90% 68%);
    --blue-500: hsl(var(--orange-hue) 20% 40%);
    --blue-600: hsl(var(--orange-hue) 20% 35%);
    --blue-700: hsl(var(--orange-hue) 20% 40%);
    --blue-800: hsl(var(--orange-hue) 20% 50%);
    --blue-900: hsl(var(--orange-hue) 20% 60%);
    --gradient-blue: linear-gradient(
      180deg,
      var(--blue-50) 0%,
      var(--blue-100),
      var(--blue-200),
      var(--blue-300),
      var(--blue-200),
      var(--blue-300),
      var(--blue-400),
      var(--blue-300),
      var(--blue-800),
      var(--blue-900)
    );
    --background: var(--black);
    --font-primary: var(--blue-50);
    --accent: var(--white);
    --accent-shadow: 0 0 30px 10px var(--blue-900);
    --link-primary: var(--white);
    --link-accent: var(--blue-600);
    --header-background: var(--blue-400);
    --disabled: var(--blue-900);
    --shadow-color: var(--orange-hue) 90% 30%;
    --black: hsl(var(--orange-hue) 86%, 1%);
    --white: hsl(var(--orange-hue) 86% 100%);

    --shadow-elevation-medium: 0px 0.6px 0.5px hsl(var(--shadow-color) / 1),
      0px 2.3px 1.7px -2.5px hsl(var(--shadow-color) / 0.97),
      0.2px 14.6px 11px -5px hsl(var(--shadow-color) / 0.49);
  }
`;

export default variables;
