import Link from 'next/link';
import styled from 'styled-components';

import SubNav from './SubNav';

import Spacer from '~components/Spacer';
import { ROUTES } from '~utils/constants';

const Navbar = () => (
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
);

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: clamp(16px, 2vw + 1rem, 48px);
`;

const SiteTitle = styled.span`
  font-size: calc(var(--font-size) * 1.3);
`;

const Side = styled.div`
  flex: 1;
`;
