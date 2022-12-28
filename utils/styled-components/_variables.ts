import { css } from 'styled-components';

const variables = css`
  /* Shared between color schemes */
  :root {
    --blue-hue: 241deg;
    --black: hsl(var(--blue-hue) 86%, 1%);
    --white: hsl(var(--blue-hue) 86% 100%);
    --max-width-wrapper: min(960px, 92vw);
    --focus-shadow: 0 0 20px 2px var(--blue-300), 0 0 0 3px var(--blue-200);

    --border-radius: 12px;
    /* spacing */
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

    /* seafoam */
    /* linear-gradient(180deg, #54756e, #55766f, #597a73, #5e7f79, #648680, #6b8d88, #74938f, #7d9996, #859d9b, #8ba1a0, #8fa4a3, #91a5a4) */

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

    --green-hue: 177deg;
    --green-50: hsl(var(--green-hue) 40% 75%);
    --green-100: hsl(var(--green-hue) 35% 70%);
    --green-200: hsl(var(--green-hue) 30% 65%);
    --green-300: hsl(var(--green-hue) 30% 60%);
    --green-400: hsl(var(--green-hue) 30% 55%);
    --green-500: hsl(var(--green-hue) 30% 50%);
    --green-600: hsl(var(--green-hue) 30% 45%);
    --green-700: hsl(var(--green-hue) 30% 40%);
    --green-800: hsl(var(--green-hue) 30% 30%);
    --green-900: hsl(var(--green-hue) 30% 20%);

    --red-hue: 1deg;
    --red-50: hsl(calc(var(--red-hue) - 5deg) 90% 35%);
    --red-100: hsl(calc(var(--red-hue) - 2deg) 100% 30%);
    --red-200: hsl(calc(var(--red-hue) + 2deg) 100% 26%);
    --red-300: hsl(var(--red-hue) 90% 22%);
    --red-400: hsl(var(--red-hue) 90% 19%);
    --red-500: hsl(var(--red-hue) 100% 15%);
    --red-600: hsl(var(--red-hue) 86% 15%);
    --red-700: hsl(var(--red-hue) 95% 12%);
    --red-800: hsl(var(--red-hue) 95% 12%);
    --red-900: hsl(var(--red-hue) 95% 10%);

    --orange-hue: 22deg;
    --orange-50: hsl(calc(var(--orange-hue) + 10deg) 100% 80%);
    --orange-100: hsl(calc(var(--orange-hue) + 10deg) 100% 70%);
    --orange-200: hsl(calc(var(--orange-hue) + 10deg) 90% 55%);
    --orange-300: hsl(calc(var(--orange-hue) + 10deg) 100% 45%);
    --orange-400: hsl(var(--orange-hue) 100% 40%);
    --orange-500: hsl(var(--orange-hue) 100% 36%);
    --orange-600: hsl(var(--orange-hue) 100% 32%);
    --orange-700: hsl(var(--orange-hue) 100% 28%);
    --orange-800: hsl(var(--orange-hue) 90% 25%);
    --orange-900: hsl(var(--orange-hue) 80% 24%);

    /* Shadow for based on blue-400 */
    --shadow-color: var(--blue-hue) 90% 30%;

    --shadow-elevation-medium: 0px 0.6px 0.5px hsl(var(--shadow-color) / 1),
      0px 2.3px 1.7px -2.5px hsl(var(--shadow-color) / 0.97),
      0.2px 14.6px 11px -5px hsl(var(--shadow-color) / 0.49);
  }

  @media (prefers-color-scheme: light) {
    :root {
      --background: var(--red-800);
      --font-primary: var(--blue-50);
      --accent: var(--red-100);
      --accent-shadow: 0 0 30px 10px var(--blue-900);
      --link-primary: var(--black);
      --link-accent: var(--red-50);
      --header-background: var(--red-400);
      --disabled: var(--red-200);
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: var(--black);
      --font-primary: var(--blue-50);
      --accent: var(--white);
      --accent-shadow: 0 0 30px 10px var(--blue-900);
      --link-primary: var(--white);
      --link-accent: var(--blue-600);
      --header-background: var(--blue-400);
      --disabled: var(--blue-900);
    }
  }
`;

export default variables;
