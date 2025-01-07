import Link from 'next/link';
import styled from 'styled-components';

import UnstyledButton from 'components/UnstyledButton';
import { useHeaderContext } from 'contexts/HeaderContext';
import { BREAKPOINTS, ROUTES } from 'utils/constants';

import Hamburger from './Hamburger';
import NavContent from './NavContent';

const Navbar = () => {
  const { showSidebar, setShowSidebar } = useHeaderContext();

  return (
    <>
      <NavbarWrapper>
        <div style={{ display: 'flex' }}>
          <Link href={ROUTES.HOME}>
            <SiteTitle>Shelbz Citrine</SiteTitle>
          </Link>
        </div>

        <Nav>
          <NavItems>
            <NavContent />
          </NavItems>
        </Nav>
        <MenuButton id="open-menu" onClick={() => setShowSidebar(!showSidebar)}>
          <Hamburger isOpen={showSidebar} />
        </MenuButton>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: none;

  @media ${BREAKPOINTS.LARGE_PHONE} {
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
  @media ${BREAKPOINTS.LARGE_PHONE} {
    display: none;
  }
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: var(--spacing-32);
  margin-right: var(--spacing-32);
  gap: clamp(16px, 2vw + 1rem, 48px);
`;

const SiteTitle = styled.span`
  font-family: var(--font-cinzel-decorative);
  font-size: var(--header-font-size);

  @media ${BREAKPOINTS.LARGE_PHONE} {
    white-space: nowrap;
    font-size: calc(var(--header-font-size) * 1.35);
  }
`;
