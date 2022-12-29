import type { CSSProperties } from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import Icon from '~components/Icon';
import Spacer from '~components/Spacer';
import UnstyledButton from '~components/UnstyledButton';
import { BREAKPOINTS, ROUTES } from '~utils/constants';

import SubNav from './SubNav';

type Props = {
  setShowMobileMenu: (show: boolean) => void;
};
const Navbar = ({ setShowMobileMenu }: Props) => (
  <>
    <Nav>
      <Spacer />
      <Side>
        <Link href={ROUTES.HOME}>
          <SiteTitle>
            Shelbz <br /> Citrine
          </SiteTitle>
        </Link>
      </Side>

      <Link href={ROUTES.ABOUT}>About Me</Link>

      <a target="_blank" rel="noreferrer noopener" href={ROUTES.BOOK}>
        Book
        <Icon id="external-link" strokeWidth={2} size={16} />
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
      <Spacer />
      <Side style={{ '--flex': '3' } as CSSProperties}>
        <Link href={ROUTES.HOME}>
          <SiteTitle>
            Shelbz <br /> Citrine
          </SiteTitle>
        </Link>
      </Side>

      <UnstyledButton onClick={() => setShowMobileMenu(true)}>
        <Icon id="menu" strokeWidth={2} size={48} />
      </UnstyledButton>
      <Side />
    </MobileNav>
  </>
);

export default Navbar;

const Nav = styled.nav`
  display: none;

  @media ${BREAKPOINTS.LAPTOP} {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    gap: clamp(16px, 2vw + 1rem, 48px);
  }
`;

const MobileNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: clamp(16px, 2vw + 1rem, 48px);

  @media ${BREAKPOINTS.LAPTOP} {
    display: none;
  }
`;

const SiteTitle = styled.span`
  font-family: 'Cinzel Decorative', cursive;
  font-size: calc(var(--font-size) * 1.4);
`;

const Side = styled.div`
  flex: var(--flex, 1);
`;
