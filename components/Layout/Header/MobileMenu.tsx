import { useEffect } from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import Icon from '../../Icon';
import UnstyledButton from '../../UnstyledButton';
import VisuallyHidden from '../../VisuallyHidden';

import SubNav from './SubNav';

import { ROUTES } from '~utils/constants';
import { open } from '~utils/styled-components/snippets';

type Props = {
  isOpen: boolean;
  onDismiss: () => void;
  setIsOpen: (isOpen: boolean) => void;
};

const MobileMenu = (props: Props) => {
  const { isOpen, setIsOpen, onDismiss } = props;

  // Close submenu on Escape key press
  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  });

  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Gap onClick={onDismiss} />

      <Body>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" size={48} strokeWidth={2} />
        </CloseButton>

        <Nav>
          <Link href={ROUTES.HOME}>Home</Link>
          <Link href={ROUTES.ABOUT}>About Me</Link>
          <a target="_blank" rel="noreferrer noopener" href={ROUTES.BOOK}>
            Book
          </a>
          <Link href={ROUTES.CONTACT}>Contact</Link>
          <SubNav
            display="Portfolio"
            items={[
              { display: 'Art', href: ROUTES.ART_PORTFOLIO },
              { display: 'Hair', href: ROUTES.BARBER_PORTFOLIO },
            ]}
          />
        </Nav>

        <Footer>
          <p>Copyright Shelbz Citrine</p>
          <p>Site by Isiah Fletcher</p>
        </Footer>
      </Body>
    </Wrapper>
  );
};

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  display: flex;
`;

const Gap = styled(UnstyledButton)`
  height: 100%;
  flex: 1;
  min-width: 75px;
  max-width: 150px;
  opacity: 0.8;
  background-color: var(--blue-500);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 5.5vw - 4rem, 3rem);
  margin: 0px 48px;
`;

const Footer = styled.footer`
  /* TODO: figure out color */
  --color: var(--red-100);
  --font-size: 0.875rem;

  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 5.5vw - 4rem, 3rem);

  margin: 0px 48px;
`;

const Body = styled.div`
  flex: 1;
  background-color: var(--red-900);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;

  animation: ${open} 1s ease-in-out;

  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

export default MobileMenu;
