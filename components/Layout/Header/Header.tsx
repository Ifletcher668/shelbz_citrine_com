import { useEffect, useState } from 'react';

import { motion } from 'motion/react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

import { useHeaderContext } from 'contexts/HeaderContext';
import { ROUTES } from 'utils/constants';

import MenuSidebar from './MenuSidebar';
import Navbar from './Navbar';

const Header = () => {
  const [forceHide, setForceHide] = useState(false);
  const { isAtTop } = useHeaderContext();
  const router = useRouter();
  const isHomePage = router.asPath === ROUTES.HOME;

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Control') {
          setForceHide(true);
        }
      };

      const handleKeyUp = () => {
        setForceHide(false);
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keydown', handleKeyUp);
      };
    }
  }, []);

  if (forceHide) {
    return <></>;
  }

  return (
    <MotionHeader
      isAtTop={isAtTop}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 0.5,
        // Delay on home page to allow image animation to run first
        delay: isHomePage ? 2 : 0.5,
      }}
    >
      <Navbar />
      <MenuSidebar />
    </MotionHeader>
  );
};

export default Header;

const HeaderWrapper = styled.header<{ isAtTop: boolean }>`
  --padding: var(--spacing-24);
  --header-font-size: var(--font-size-extra-large);
  --max-width: calc(var(--max-width-wrapper));
  --box-shadow: var(--shadow-elevation-high);
  --opacity: 0.98;
  --header-background: var(--background-secondary);

  ${({ isAtTop }) =>
    isAtTop &&
    css`
      --padding: var(--spacing-32);
      --max-width: calc(var(--max-width-wrapper) * 2);
      --box-shadow: 0 0 0 0;
      --opacity: 1;
      --header-background: transparent;
    `}

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* Always on top */
  z-index: 1000000;

  margin: auto;

  max-width: var(--max-width);
  min-width: var(--max-width-wrapper);

  padding-top: var(--padding);
  padding-bottom: var(--padding);

  background-color: var(--header-background);
  opacity: var(--opacity);
  box-shadow: var(--box-shadow);
  transition: all 500ms ease-out;

  a {
    color: var(--font-secondary);

    &:hover {
      color: var(--font-secondary-accent);
    }
  }
`;

const MotionHeader = motion(HeaderWrapper);
