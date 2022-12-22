import type { ReactNode } from 'react';

import styled from 'styled-components';

import { Spacer } from '..';
import { fadeIn } from '../../utils/styled-components/snippets';

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
      <Spacer top={200} />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  max-width: var(--max-width-wrapper);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: var(--main-content-gap);
`;

export default Layout;
