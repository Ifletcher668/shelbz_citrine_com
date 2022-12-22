import Link from 'next/link';
import styled from 'styled-components';

import SubNav from './SubNav';

import Icon from '~components/Icon';
import Spacer from '~components/Spacer';
import UnstyledButton from '~components/UnstyledButton';
import { BREAKPOINTS, ROUTES } from '~utils/constants';

type Props = {
  setShowMobileMenu: (show: boolean) => void;
};
const Navbar = ({ setShowMobileMenu }: Props) => (
  <>
    <Nav>
      {/* No padding applied to spacer to allow "gap" to handle spacing */}
      <Spacer />

      <Side>
        <Link href={ROUTES.HOME}>
          <SiteTitle>Shelbz Citrine</SiteTitle>
        </Link>
      </Side>

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

      <Side />
    </Nav>

    <MobileNav>
      <Link href={ROUTES.HOME}>
        <SiteTitle>Shelbz Citrine</SiteTitle>
      </Link>

      <UnstyledButton onClick={() => setShowMobileMenu(true)}>
        <Icon id="menu" strokeWidth={2} size={48} />
      </UnstyledButton>
    </MobileNav>
  </>
);

export default Navbar;

const Nav = styled.nav`
  display: none;

  @media ${BREAKPOINTS.LAPTOP} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: clamp(16px, 2vw + 1rem, 48px);
  }
`;

const MobileNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${BREAKPOINTS.LAPTOP} {
    display: none;
  }
`;

const SiteTitle = styled.span`
  font-size: calc(var(--font-size) * 1.3);
`;

const Side = styled.div`
  flex: 1;
`;
