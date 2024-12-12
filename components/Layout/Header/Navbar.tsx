import Icon from 'components/Icon';
import Spacer from 'components/Spacer';
import Link from 'next/link';
import styled, { CSSProperties } from 'styled-components';
import { BREAKPOINTS, ROUTES } from 'utils/constants';
import Moon from './Moon';
import UnstyledButton from 'components/UnstyledButton';
import { useHeaderContext } from 'contexts/HeaderContext';
import NavContent from './NavContent';

const Navbar = () => {
  const { showSidebar, setShowSidebar } = useHeaderContext();

  return (
    <>
      <NavbarWrapper>
        <Spacer />

        <Side style={{ '--flex': '3' } as CSSProperties}>
          <Link href={ROUTES.HOME}>
            <SiteTitle>Shelbz Citrine</SiteTitle>
          </Link>
        </Side>

        <Nav>
          <NavItems>
            <NavContent />
          </NavItems>
        </Nav>

        <MenuButton
          id="open-menu"
          onClick={() => setShowSidebar(true)}
          style={
            {
              '--visibility': showSidebar ? 'hidden' : 'visible',
            } as CSSProperties
          }
        >
          <Icon id="menu" strokeWidth={2} size={60} />
        </MenuButton>
      </NavbarWrapper>

      <Moon />
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: none;

  @media ${BREAKPOINTS.LAPTOP} {
    display: block;
  }

  a {
    font-size: var(--header-font-size);
  }
`;

const NavItems = styled.ul`
  position: relative;
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;

  gap: clamp(1.2rem, 5.5vw - 4rem, 3rem);

  flex: 1;
`;

const MenuButton = styled(UnstyledButton)`
  visibility: var(--visibility);

  @media ${BREAKPOINTS.LAPTOP} {
    display: none;
  }
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: clamp(16px, 2vw + 1rem, 48px);

  margin-right: calc(var(--moon-size) - 25px);
`;

const SiteTitle = styled.span`
  font-family: var(--font-cinzel-decorative);
  font-size: calc(var(--header-font-size) * 1.25);
`;

const Side = styled.div`
  flex: var(--flex, 1);
`;
