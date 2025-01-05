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
  :root {
    --max-width-wrapper: min(1450px, 92vw);

    /* Spacing */
    --spacing-56: 56px;
    --spacing-48: 48px;
    --spacing-40: 40px;
    --spacing-32: 32px;
    --spacing-24: 24px;
    --spacing-18: 18px;
    --spacing-16: 16px;
    --spacing-8: 8px;

    /* font-size */
    --font-size-triple-extra-large: clamp(3.5rem, 6vw, 4.5rem);
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

    /* Box Shadows */
    --shadow-color: 171deg 42% 8%;
    --shadow-elevation-low: 0px 1px 4px hsl(171deg 42% 8% / 0.5),
      0px 3px 6px hsl(171deg 42% 8% / 0.5),
      0px 4px 8px -1px hsl(171deg 42% 8% / 0.5),
      0px 5px 10px -2px hsl(171deg 42% 8% / 0.5);
    --shadow-elevation-medium: 0px 1px 1px hsl(171deg 42% 8% / 0.37),
      -0.1px 4px 4px -1.5px hsl(171deg 42% 8% / 0.37),
      -0.2px 6px 7px -3px hsl(171deg 42% 8% / 0.37),
      -0.4px 10px 12px -5px hsl(171deg 42% 8% / 0.37);
    --shadow-elevation-high: 0px 0.2px 0.2px hsl(var(--shadow-color) / 0.34),
      -0.1px 1px 1.1px -0.4px hsl(var(--shadow-color) / 0.34),
      -0.2px 1.9px 2.1px -0.7px hsl(var(--shadow-color) / 0.34),
      -0.3px 3.1px 3.5px -1.1px hsl(var(--shadow-color) / 0.34),
      -0.5px 4.9px 5.5px -1.4px hsl(var(--shadow-color) / 0.34),
      -0.8px 7.7px 8.7px -1.8px hsl(var(--shadow-color) / 0.34),
      -1.3px 11.7px 13.2px -2.1px hsl(var(--shadow-color) / 0.34),
      -1.8px 17.2px 19.5px -2.5px hsl(var(--shadow-color) / 0.34);

    /* Color theme */
    --blue-hue: 171deg;
    --brown-hue: 39deg;
    --red-hue: 5deg;

    --background: hsl(0deg 0 0%);
    --background-secondary: hsl(0deg 0 9%);
    --background-tertiary: hsl(0deg 0 10%);

    --color-dark-gray: hsl(var(--blue-hue) 3% 30%);

    --font-primary: hsl(var(--brown-hue) 55% 34%);
    --font-secondary: hsl(var(--blue-hue) 42% 23%);
    --font-secondary-accent: hsl(var(--brown-hue) 100% 34%);
    --font-tertiary: hsl(var(--brown-hue) 100% 99%);

    --color-error: hsl(var(--red-hue) 100% 35%);
    --color-disabled: hsl(var(--red-hue) 5% 15%);
  }
`;

export default variables;
