import { useEffect } from 'react';

import { motion, useAnimate } from 'motion/react';

const Hamburger = (props: { isOpen: boolean }) => {
  const { isOpen } = props;

  const scope = useMenuAnimation(isOpen);

  return (
    <motion.svg
      ref={scope}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      initial="hidden"
      animate="visible"
    >
      <Path
        d={PATHS.top.closed}
        className="top"
        custom={1}
        variants={{
          closed: { d: PATHS.top.closed },
          open: { d: PATHS.top.open },
        }}
      />
      <Path d={PATHS.middle.closed} opacity="1" custom={2} className="middle" />
      <Path
        d={PATHS.bottom.closed}
        className="bottom"
        custom={3}
        variants={{
          closed: { d: PATHS.bottom.closed },
          open: { d: PATHS.top.closed },
        }}
      />
    </motion.svg>
  );
};

export default Hamburger;

const PATHS = {
  top: {
    open: 'M 0 0 L 36 36',
    closed: 'M 0 4 L 36 4',
  },
  middle: {
    open: '',
    closed: 'M 0 18 L 36 18',
  },
  bottom: {
    open: 'M 0 36 L 36 0',
    closed: 'M 0 32 L 36 32',
  },
};

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        'path.top',
        { d: PATHS.top[isOpen ? 'open' : 'closed'] },
        { at: '<', duration: 0.4 },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<', duration: 0.4 }],
      [
        'path.bottom',
        { d: PATHS.bottom[isOpen ? 'open' : 'closed'] },
        { at: '<', duration: 0.4 },
      ],
    ]);
  }, [isOpen, animate]);

  return scope;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Path = (props: any) => (
  <path
    strokeWidth="3"
    stroke="var(--font-primary)"
    strokeLinecap="round"
    {...props}
  />
);
