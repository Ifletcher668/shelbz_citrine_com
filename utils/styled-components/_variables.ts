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
    /* SPACING */
    --main-content-gap: 60px;
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

    /* Base Theme Hues */
    --blue-hue: 225deg;
    --green-hue: 165deg;
    --red-hue: 360deg;
    --orange-hue: 18deg;
    --yellow-hue: 45deg;
    --purple-hue: 265deg;

    /* Theme Variables */
    --header-background: var(--color-400);
    --background: radial-gradient(
      circle at center,
      hsl(calc(var(--current-color-hue) - 5deg) 85% 2%),
      hsl(calc(var(--current-color-hue)) 80% 6%),
      hsl(calc(var(--current-color-hue) + 5deg) 85% 2%)
    );

    --moon-shadow: 0 0 30px 10px
      hsl(calc(var(--current-color-hue) + 5deg) 20% 80%);
    --moon-gradient: radial-gradient(
      ellipse,
      hsl(calc(var(--current-color-hue) - 10deg) 10% 85%),
      hsl(calc(var(--current-color-hue) - 5deg) 10% 80%),
      hsl(calc(var(--current-color-hue) + 10deg) 10% 70%)
    );

    --shadow-color: hsl(var(--current-color-hue) 90% 25%);
    --shadow-elevation-medium: 0px 0.6px 0.5px hsl(var(--shadow-color) / 1),
      0px 2.3px 1.7px -2.5px hsl(var(--shadow-color) / 0.97),
      0.2px 14.6px 11px -5px hsl(var(--shadow-color) / 0.49);

    --font-primary: hsl(var(--current-color-hue) 100% 80%);
    --font-accent: hsl(var(--current-color-hue) 90% 80%);
    --font-secondary: hsl(var(--current-color-hue) 95% 50%);

    --color-50: hsl(calc(var(--current-color-hue) + 5deg) 90% 30%);
    --color-100: hsl(calc(var(--current-color-hue) + 5deg) 90% 25%);
    --color-200: hsl(var(--current-color-hue) 85% 50%);
    --color-300: hsl(var(--current-color-hue) 85% 45%);
    --color-400: hsl(var(--current-color-hue) 80% 35%);
    --color-500: hsl(var(--current-color-hue) 40% 30%);
    --color-600: hsl(calc(var(--current-color-hue) + 5deg) 70% 40%);
    --color-700: hsl(var(--current-color-hue) 20% 20%);
    --color-800: hsl(var(--current-color-hue) 10% 10%);

    --color-error: hsl(var(--red-hue) 100% 35%);
    --color-disabled: hsl(var(--red-hue) 5% 15%);
  }

  [data-color-scheme='moon'] {
    --current-color-hue: var(--blue-hue);
  }

  [data-color-scheme='ocean'] {
    --current-color-hue: var(--green-hue);
  }

  [data-color-scheme='bloodMoon'] {
    --current-color-hue: var(--red-hue);
  }

  [data-color-scheme='harvestMoon'] {
    --current-color-hue: var(--orange-hue);
  }

  [data-color-scheme='sun'] {
    --current-color-hue: var(--yellow-hue);
  }

  [data-color-scheme='royal'] {
    --current-color-hue: var(--purple-hue);
  }
`;

export default variables;
