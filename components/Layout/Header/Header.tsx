import { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

import { BREAKPOINTS } from 'utils/constants';

import MobileMenu from './MobileMenu';
import Moon from './Moon';
import Navbar from './Navbar';

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [forceHide, setForceHide] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsAtTop(y < 100 ? true : false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

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
    <HeaderWrapper isAtTop={isAtTop}>
      <Navbar setShowMobileMenu={setShowMobileMenu} />

      <MobileMenu
        isOpen={showMobileMenu}
        setIsOpen={setShowMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />

      <Moon />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header<{ isAtTop: boolean }>`
  --header-transition: all 300ms ease;
  --padding: var(--spacing-medium);
  --font-size: var(--font-size-extra-small);
  --max-width: calc(var(--max-width-wrapper) * 1.3);
  --moon-size: 22vw;
  --box-shadow: var(--shadow-elevation-medium);

  @media ${BREAKPOINTS.TABLET} {
    ${({ isAtTop }) =>
      isAtTop &&
      css`
        --padding: var(--spacing-large);
        --font-size: var(--font-size-large);
        --max-width: calc(var(--max-width-wrapper) * 1.5);
        --moon-size: 25vw;
        --box-shadow: 0 0 0 0;
      `}
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* Always on top */
  z-index: 1000000;

  margin: auto;
  border-radius: 0px 0px 5px 5px;

  max-width: var(--max-width);
  min-width: var(--max-width-wrapper);
  padding-top: var(--padding);
  padding-bottom: var(--padding);
  background-color: var(--header-background);
  font-size: var(--font-size);
  box-shadow: var(--box-shadow);
  transition: var(--header-transition);
`;
