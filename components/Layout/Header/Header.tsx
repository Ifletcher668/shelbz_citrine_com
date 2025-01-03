import { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

import { useHeaderContext } from 'contexts/HeaderContext';

import MenuSidebar from './MenuSidebar';
import Navbar from './Navbar';

const Header = () => {
  const [forceHide, setForceHide] = useState(false);
  const { isAtTop } = useHeaderContext();

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
      <Navbar />

      <MenuSidebar />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header<{ isAtTop: boolean }>`
  --padding: var(--spacing-24);
  --header-font-size: var(--font-size-large);
  --max-width: calc(var(--max-width-wrapper));
  --box-shadow: var(--shadow-elevation-high);
  --opacity: 0.98;

  ${({ isAtTop }) =>
    isAtTop &&
    css`
      --padding: var(--spacing-32);
      --max-width: calc(var(--max-width-wrapper) * 1.5);
      --box-shadow: 0 0 0 0;
      --opacity: 1;
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

  background-color: var(--background-secondary);
  opacity: var(--opacity);
  box-shadow: var(--box-shadow);
  transition: all 250ms ease;

  a {
    color: var(--font-secondary);

    &:hover {
      color: var(--font-secondary-accent);
    }
  }
`;
