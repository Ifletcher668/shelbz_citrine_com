import { useEffect } from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import { ROUTES } from '../../../utils/constants';
import { open } from '../../../utils/styled-components/snippets';
import Icon from '../../Icon';
import UnstyledButton from '../../UnstyledButton';
import VisuallyHidden from '../../VisuallyHidden';
import { useRouter } from 'next/router';

type Props = {
  isOpen: boolean;
  onDismiss: () => void;
  setIsOpen: (isOpen: boolean) => void;
};

const LINKS = [
  { href: ROUTES.HOME, label: 'Home' },
  { href: ROUTES.ABOUT, label: 'About Me' },
  { href: ROUTES.CONTACT, label: 'Contact' },
];

const MobileMenu = (props: Props) => {
  const { isOpen, setIsOpen, onDismiss } = props;
  const router = useRouter();

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
          {LINKS.filter(link => link.href !== router.pathname).map(link => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
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
  z-index: 1000000;

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
  background-color: var(--color-800);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 5.5vw - 4rem, 3rem);

  a {
    font-size: var(--font-size-double-extra-large);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  p {
    font-size: var(--font-size-double-extra-small);
  }
`;

const Body = styled.div`
  flex: 1;
  background-color: var(--header-background);

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
