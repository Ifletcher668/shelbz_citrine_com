import type { ReactNode } from 'react';

import type { Variants } from 'motion/react';
import styled from 'styled-components';

import Spacer from '../Spacer';

import Footer from './Footer';
import MainWrapper from './MainWrapper';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Wrapper>
        <Spacer top={[100, 115, 120, 150]} />
        <MainWrapper
          variants={layoutVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </MainWrapper>
        <Spacer top={150} />
        <Footer />
        <Spacer top={150} />
      </Wrapper>
    </>
  );
};

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

const layoutVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.25,
      when: 'beforeChildren',
    },
  },
};

export default Layout;
