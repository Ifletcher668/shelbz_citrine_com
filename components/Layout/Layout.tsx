import type { ReactNode } from 'react';

import styled from 'styled-components';

import StarryCanvas from 'components/StarryCanvas';
import HeaderProvider from 'contexts/HeaderContext';
import NavbarProvider from 'contexts/NavbarContext';
import type { NavbarPathProps } from 'utils/getNavbarPathProps';

import { fadeIn } from '../../utils/styled-components/snippets';
import Spacer from '../Spacer';

import Footer from './Footer';
import Header from './Header';

type Props = {
  children: ReactNode;
  navbarData: NavbarPathProps;
};

const PageTransition = styled.div`
  animation: ${fadeIn} 750ms ease-in;
`;

const Layout = ({ children, navbarData }: Props) => {
  return (
    <NavbarProvider data={navbarData}>
      <StarryCanvas />
      <Wrapper>
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        <Spacer top={250} />
        <PageTransition>{children}</PageTransition>
        <Spacer top={150} />
        <Footer />
        <Spacer top={150} />
        <Background />
      </Wrapper>
    </NavbarProvider>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--background);
  z-index: -1;
`;

const Wrapper = styled.div`
  /* Necessary to put stars behind it */
  position: relative;

  min-height: 100%;
  max-width: var(--max-width-wrapper);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export default Layout;
