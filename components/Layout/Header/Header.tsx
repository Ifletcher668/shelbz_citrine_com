import { useEffect, useState } from 'react';

import type { CSSProperties } from 'styled-components';
import styled from 'styled-components';

import MobileMenu from './MobileMenu';
import Moon from './Moon';
import Navbar from './Navbar';

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsAtTop(y < 100 ? true : false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    '--transition': 'all 300ms ease',
    '--padding': isAtTop ? '45px' : '30px',
    '--font-size': isAtTop ? '1.5rem' : '1rem',
    '--max-width': isAtTop
      ? 'min(calc(var(--max-width-wrapper) * 1.5), 90vw)'
      : 'var(--max-width-wrapper)',
    '--moon-size': isAtTop ? '300px' : '250px',
    '--box-shadow': isAtTop ? '0 0 0 0' : 'var(--shadow-elevation-medium)',
  } as CSSProperties;

  return (
    <HeaderWrapper style={styles}>
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

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 0px 0px 0px 5px;

  max-width: var(--max-width);
  min-width: var(--max-width-wrapper);
  padding-top: var(--padding);
  padding-bottom: var(--padding);
  background-color: var(--header-background);
  font-size: var(--font-size);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
`;