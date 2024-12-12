import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import { open } from '../../../utils/styled-components/snippets';
import Icon from '../../Icon';
import UnstyledButton from '../../UnstyledButton';
import VisuallyHidden from '../../VisuallyHidden';
import Spacer from 'components/Spacer';
import ReactFocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import NavContent from './NavContent';
import { useHeaderContext } from 'contexts/HeaderContext';

const MenuSidebar = () => {
  const router = useRouter();
  const { setIsSubmenuOpen, showSidebar, setShowSidebar } = useHeaderContext();

  const onDismiss = () => setShowSidebar(false);

  const onCloseMobileMenu = () => {
    setIsSubmenuOpen(false);
    onDismiss();
  };

  useEffect(() => {
    onDismiss();

    // using asPath to close dynamic routes as well
  }, [router.asPath]);

  // Close submenu on Escape key press
  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowSidebar(false);
    };

    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  });

  if (!showSidebar) {
    return null;
  }

  return (
    <ReactFocusLock autoFocus returnFocus>
      <RemoveScroll>
        <Wrapper>
          <Gap onClick={onCloseMobileMenu} />

          <Body>
            <CloseButton onClick={onCloseMobileMenu}>
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
              <Icon id="close" size={48} strokeWidth={2} />
            </CloseButton>

            <Spacer style={{ flex: 1 }} />

            <Nav>
              <NavItems>
                <NavContent />
              </NavItems>
            </Nav>

            <Footer>
              <p>Copyright Shelbz Citrine</p>
              <p>Site by Isiah Fletcher</p>
            </Footer>
          </Body>
        </Wrapper>
      </RemoveScroll>
    </ReactFocusLock>
  );
};

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;

  height: 100%;
  width: 100%;

  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 5.5vw - 4rem, 3rem);

  padding-left: var(--spacing-double-extra-small);
  padding-bottom: var(--spacing-extra-large);

  flex: 1;

  overflow: auto;

  a {
    font-size: var(--font-size-double-extra-large);
  }
`;

const NavItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  p {
    font-size: var(--font-size-double-extra-small);
  }
`;

const Gap = styled(UnstyledButton)`
  height: 100%;
  flex: 1;
  min-width: 75px;
  opacity: 0.4;
  background-color: var(--color-800);

  animation: ${open(0.4)} 0.3s ease-in-out;
`;

const Body = styled.div`
  flex: 1;
  max-width: 420px;
  background-color: var(--header-background);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;

  animation: ${open()} 0.8s ease-in-out;

  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

export default MenuSidebar;
