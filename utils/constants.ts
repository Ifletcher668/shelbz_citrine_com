export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  BOOK: 'https://squareup.com/appointments/book/q1xf9jczhanlgg/LJFMCFRDSQS00/services',
  REDBUBBLE: 'https://www.redbubble.com/people/mottephobia5/shop',
  CONTACT: '/contact',
  FEED: '/#feed',
} as const;

export const SOCIALS = {
  INSTAGRAM: 'https://www.instagram.com/tigermoth_grooming/',
} as const;

export const BREAKPOINTS = {
  MOBILE: 0,
  TABLET: `(min-width: ${769 / 16}rem)`,
  LAPTOP: `(min-width: ${1101 / 16}rem)`,
  DESKTOP: `(min-width: ${1501 / 16}rem)`,
} as const;

export const VALIDATION_CONSTANTS = {
  VALID_NAME_REGEX: /^[^0-9`!@#\$%\^&*+_=<>{}()\[\]]+$/,
  VALID_EMAIL_REGEX:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  BAD_GMAIL_REGEX: /@gmail\.co$/,
  BAD_HOTMAIL_REGEX: /@hotmail\.co$/,
  BAD_COM_REGEX: /.com[a-zA-Z]$/,
  BAD_CON_REGEX: /.con$/,
};
