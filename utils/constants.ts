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

export const BREAKPOINT_NUMBERS = {
  MOBILE: 0,
  LARGE_PHONE: 532,
  TABLET: 769,
  LAPTOP: 1101,
  DESKTOP: 1501,
};

export const BREAKPOINTS = {
  LARGE_PHONE: `(min-width: ${BREAKPOINT_NUMBERS.LARGE_PHONE / 16}rem)`,
  TABLET: `(min-width: ${BREAKPOINT_NUMBERS.TABLET / 16}rem)`,
  LAPTOP: `(min-width: ${BREAKPOINT_NUMBERS.LAPTOP / 16}rem)`,
  DESKTOP: `(min-width: ${BREAKPOINT_NUMBERS.DESKTOP / 16}rem)`,
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

export const SEO = {
  base: {
    title: 'Shelbz Citrine',
    description:
      "Shelbz Citrine blends modernity and heritage, weaves the magic of traditional painting styles into a digital age tableau, infused into a tapestry that speaks to the contemporary mind. Her work stands as a bridge, connecting the timeless mastery of the 17th century with the innovative surrealism of the 20th, crafting an aesthetic that resonates with the contemporary connoisseur's diverse interests.",
    openGraph: {
      image: '/assets/goddess.jpg',
      description:
        "Experience the mesmerizing blend of classic and modern in Shelbz Citrine's art. Her work bridges the timeless mastery of traditional painting styles with innovative surrealism, crafting an aesthetic that speaks volumes to today's diverse art enthusiasts.",
    },
  },
  homePage: {
    title: 'Shelbz Citrine | Home',
    description:
      'A Boise, Idaho based artist combining classical training with self-taught innovation to produce dark and surreal works inspired by a medley of influences.',
  },
  contactPage: {
    title: 'Contact Me',
    description:
      'Discover acrylic, oil, and Procreate art by Shelbz. Commission surreal to sublime pieces, regardless of your location – Boise and beyond. Reach out today!',
  },
  aboutPage: {
    title: 'About Me',
    description:
      "A Boise, Idaho based artist and painter. Shelbz's art is a hybrid of old and new, traditional and futuristic.",
  },
};
