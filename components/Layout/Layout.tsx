import type { ReactNode } from 'react';

import styled from 'styled-components';

import { fadeIn } from '../../utils/styled-components/snippets';
import SettingsButton from '../SettingsButton';
import Spacer from '../Spacer';

import Footer from './Footer';
import Header from './Header';

type Props = {
  children: ReactNode;
};

const PageTransition = styled.div`
  animation: ${fadeIn} 750ms ease-in;
`;

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Spacer top={140} />
      <PageTransition>{children}</PageTransition>
      <Spacer top={40} />
      <Footer />
      <SettingsButton />
      <Background />
    </Wrapper>
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
  min-height: 100%;
  max-width: var(--max-width-wrapper);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export default Layout;
