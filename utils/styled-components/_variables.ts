import { Cinzel_Decorative, Cormorant } from 'next/font/google';
import { css } from 'styled-components';

export const cinzelDecorative = Cinzel_Decorative({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const cormorant = Cormorant({
  weight: ['300', '400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

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

    /* font-size */
    --font-size-triple-extra-large: clamp(2.5rem, 6vw, 3.5rem);
    --font-size-double-extra-large: clamp(2rem, 6vw, 3rem);
    --font-size-extra-large: clamp(1.75rem, 4vw, 2rem);
    --font-size-large: clamp(1.375rem, 4vw, 1.75rem);
    --font-size-medium: clamp(1.125rem, 4vw, 1.375rem);
    --font-size-small: 1.125rem;
    --font-size-extra-small: 1rem;
    --font-size-double-extra-small: 0.875rem;

    /* font-family */
    --font-cinzel-decorative: ${cinzelDecorative.style.fontFamily};
    --font-cormorant: ${cormorant.style.fontFamily};

    /* MISC */
    --max-width-wrapper: min(960px, 92vw);
    --focus-shadow: 0 0 20px 2px var(--color-600), 0 0 0 3px var(--color-500);
    --border-radius: 12px;
    --size-moon: 400px;
  }

  [data-color-scheme='moon'] {
    --color-50: hsl(calc(var(--blue-hue) + 5deg) 100% 95%);
    --color-100: hsl(calc(var(--blue-hue) + 5deg) 95% 88%);
    --color-200: hsl(var(--blue-hue) 95% 80%);
    --color-300: hsl(var(--blue-hue) 95% 74%);
    --color-400: hsl(var(--blue-hue) 90% 68%);
    --color-500: hsl(var(--blue-hue) 20% 40%);
    --color-600: hsl(var(--blue-hue) 20% 35%);
    --color-700: hsl(var(--blue-hue) 20% 40%);
    --color-800: hsl(var(--blue-hue) 20% 50%);
    --color-900: hsl(var(--blue-hue) 20% 60%);
    --color-error: hsl(var(--red-hue) 100% 50%);
    --color-disabled: hsl(var(--red-hue) 1% 34%);

    --background-gradient: radial-gradient(
      circle at center,
      hsl(calc(var(--blue-hue) - 5deg) 83% 1%),
      hsl(calc(var(--blue-hue)) 83% 8%),
      hsl(calc(var(--blue-hue) + 5deg) 83% 1%)
    );

    --moon-shadow: 0 0 30px 10px hsl(calc(var(--blue-hue) + 5deg) 80% 50%);
    --moon-gradient: radial-gradient(
      ellipse,
      hsl(calc(var(--blue-hue) - 10deg) 83% 100%),
      hsl(calc(var(--blue-hue) - 10deg) 83% 100%),
      hsl(calc(var(--blue-hue) + 5deg) 83% 80%)
    );

    --background: var(--background-gradient);
    --header-background: var(--color-400);
    --font-primary: hsl(var(--blue-hue) 100% 95%);
    --font-accent: hsl(var(--blue-hue) 70% 50%);
    --font-secondary: hsl(var(--blue-hue) 97% 54%);

    --shadow-color: var(--blue-hue) 90% 30%;
    --shadow-elevation-medium: 0px 0.6px 0.5px hsl(var(--shadow-color) / 1),
      0px 2.3px 1.7px -2.5px hsl(var(--shadow-color) / 0.97),
      0.2px 14.6px 11px -5px hsl(var(--shadow-color) / 0.49);
  }

  [data-color-scheme='ocean'] {
    --color-50: hsl(calc(var(--green-hue) + 5deg) 100% 95%);
    --color-100: hsl(calc(var(--green-hue) + 5deg) 95% 88%);
    --color-200: hsl(var(--green-hue) 95% 80%);
    --color-300: hsl(var(--green-hue) 95% 74%);
    --color-400: hsl(var(--green-hue) 90% 68%);
    --color-500: hsl(var(--green-hue) 20% 40%);
    --color-600: hsl(var(--green-hue) 20% 35%);
    --color-700: hsl(var(--green-hue) 20% 40%);
    --color-800: hsl(var(--green-hue) 20% 50%);
    --color-900: hsl(var(--green-hue) 20% 60%);
    --color-error: hsl(var(--red-hue) 100% 50%);
    --color-disabled: hsl(var(--green-hue) 1% 34%);

    --background-gradient: radial-gradient(
      circle at center,
      hsl(calc(var(--green-hue) - 5deg) 83% 1%),
      hsl(calc(var(--green-hue)) 83% 8%),
      hsl(calc(var(--green-hue) + 5deg) 83% 1%)
    );

    --moon-shadow: 0 0 30px 10px hsl(calc(var(--green-hue) + 5deg) 80% 50%);
    --moon-gradient: radial-gradient(
      ellipse,
      hsl(calc(var(--green-hue) - 10deg) 83% 100%),
      hsl(calc(var(--green-hue) - 10deg) 83% 100%),
      hsl(calc(var(--green-hue) + 5deg) 83% 80%)
    );

    --background: var(--background-gradient);
    --header-background: var(--color-400);
    --font-primary: hsl(var(--green-hue) 100% 95%);
    --font-accent: hsl(var(--green-hue) 70% 50%);
    --font-secondary: hsl(var(--green-hue) 97% 30%);

    --shadow-color: var(--green-hue) 90% 30%;
    --shadow-elevation-medium: 0px 0.6px 0.5px hsl(var(--shadow-color) / 1),
      0px 2.3px 1.7px -2.5px hsl(var(--shadow-color) / 0.97),
      0.2px 14.6px 11px -5px hsl(var(--shadow-color) / 0.49);
  }

  [data-color-scheme='bloodMoon'] {
    --color-100: hsl(calc(var(--red-hue) + 5deg) 95% 88%);
    --color-200: hsl(var(--red-hue) 95% 80%);
    --color-300: hsl(var(--red-hue) 95% 74%);
    --color-400: hsl(var(--red-hue) 97% 15%);
    --color-500: hsl(var(--red-hue) 20% 40%);
    --color-600: hsl(calc(var(--red-hue) + 5deg) 80% 70%);
    --color-700: hsl(var(--red-hue) 20% 40%);
    --color-800: hsl(var(--red-hue) 15% 18%);
    --color-error: hsl(var(--red-hue) 100% 50%);
    --color-disabled: hsl(var(--red-hue) 1% 34%);

    --background-gradient: radial-gradient(
      circle at center,
      hsl(calc(var(--red-hue) - 5deg) 83% 1%),
      hsl(calc(var(--red-hue)) 83% 8%),
      hsl(calc(var(--red-hue) + 5deg) 83% 1%)
    );

    --moon-shadow: 0 0 30px 10px hsl(calc(var(--red-hue) + 5deg) 80% 50%);
    --moon-gradient: radial-gradient(
      ellipse,
      hsl(calc(var(--red-hue) - 10deg) 83% 100%),
      hsl(calc(var(--red-hue) - 10deg) 83% 100%),
      hsl(calc(var(--red-hue) + 5deg) 83% 80%)
    );

    --background: var(--background-gradient);
    --header-background: var(--color-400);
    --font-primary: hsl(var(--red-hue) 100% 95%);
    --font-accent: hsl(var(--red-hue) 80% 50%);
    --font-secondary: hsl(var(--red-hue) 97% 30%);

    --shadow-color: var(--red-hue) 90% 20%;
    --shadow-elevation-medium: 0px 0.6px 0.5px hsl(var(--shadow-color) / 1),
      0px 2.3px 1.7px -2.5px hsl(var(--shadow-color) / 0.97),
      0.2px 14.6px 11px -5px hsl(var(--shadow-color) / 0.49);
  }

  [data-color-scheme='harvestMoon'] {
    --color-100: hsl(calc(var(--orange-hue) + 5deg) 95% 88%);
    --color-200: hsl(var(--orange-hue) 95% 80%);
    --color-300: hsl(var(--orange-hue) 95% 74%);
    --color-400: hsl(var(--orange-hue) 97% 47%);
    --color-500: hsl(var(--orange-hue) 20% 40%);
    --color-600: hsl(calc(var(--orange-hue) + 5deg) 80% 70%);
    --color-700: hsl(var(--orange-hue) 20% 40%);
    --color-800: hsl(var(--orange-hue) 15% 18%);
    --color-error: hsl(var(--red-hue) 100% 30%);
    --color-disabled: hsl(var(--red-hue) 5% 34%);

    --background-gradient: radial-gradient(
      circle at center,
      hsl(calc(var(--orange-hue) - 5deg) 83% 1%),
      hsl(calc(var(--orange-hue)) 83% 8%),
      hsl(calc(var(--orange-hue) + 5deg) 83% 1%)
    );

    --moon-shadow: 0 0 30px 10px hsl(calc(var(--orange-hue) + 5deg) 100% 80%);
    --moon-gradient: radial-gradient(
      ellipse,
      hsl(calc(var(--orange-hue) - 10deg) 83% 45%),
      hsl(calc(var(--orange-hue) - 5deg) 83% 45%),
      hsl(calc(var(--orange-hue) - 5deg) 83% 45%),
      hsl(calc(var(--orange-hue) + 5deg) 83% 45%),
      hsl(calc(var(--orange-hue) + 5deg) 83% 45%),
      hsl(calc(var(--orange-hue) + 5deg) 100% 80%)
    );

    --background: var(--background-gradient);
    --header-background: var(--color-400);
    --font-primary: hsl(var(--orange-hue) 80% 85%);
    --font-accent: hsl(var(--orange-hue) 75% 35%);
    --font-secondary: hsl(var(--orange-hue) 97% 30%);

    --shadow-color: var(--orange-hue) 90% 30%;
    --shadow-elevation-medium: 0px 0.6px 0.5px hsl(var(--shadow-color) / 1),
      0px 2.3px 1.7px -2.5px hsl(var(--shadow-color) / 0.97),
      0.2px 14.6px 11px -5px hsl(var(--shadow-color) / 0.49);
  }
`;

export default variables;
