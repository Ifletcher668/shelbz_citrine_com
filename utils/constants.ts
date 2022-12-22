export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  BOOK: 'https://squareup.com/appointments/book/q1xf9jczhanlgg/LJFMCFRDSQS00/services',
  CONTACT: '/contact',
  ART_PORTFOLIO: '/portfolio/art',
  BARBER_PORTFOLIO: '/portfolio/barber',
} as const;

export const SOCIALS = {
  INSTAGRAM: 'https://www.instagram.com/tigermoth_grooming/',
} as const;

export const BREAKPOINTS = {
  MOBILE: 0,
  TABLET: `(min-width: ${769 / 16}rem)`,
  LAPTOP: `(min-width: ${1101 / 16}rem)`,
  desktop: `(min-width: ${1501 / 16}rem)`,
} as const;
