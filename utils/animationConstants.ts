import type { Variants } from 'motion/react';

export const pageVariants: Variants = {
  pageInitial: { opacity: 0 },
  pageAnimate: {
    opacity: 1,

    transition: { type: 'spring', ease: 'easeOut', duration: 0.5 },
  },
  pageExit: {
    opacity: 0,
    y: 50,
    transition: { type: 'spring', ease: 'easeOut', duration: 0.5 },
  },
};

export const childVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
