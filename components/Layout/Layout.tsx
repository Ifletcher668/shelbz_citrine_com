import type { ReactNode } from 'react';

import { motion } from 'motion/react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { ROUTES } from 'utils/constants';

import Spacer from '../Spacer';

import Footer from './Footer';
import MainWrapper from './MainWrapper';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const isHomePage = router.asPath === ROUTES.HOME;

  return (
    <>
      <Wrapper>
        {isHomePage ? (
          <FrontPageBackground
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0, 1],
            }}
            transition={{
              scale: {
                duration: 2,
                ease: 'linear',
              },
              opacity: { duration: 2, ease: 'easeOut' },
            }}
          />
        ) : (
          <>
            <Spacer top={[100, 115, 120, 150]} />

            <MainWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: 'tween',
                ease: 'easeOut',
                opacity: { delay: 0.25, duration: 1 },
              }}
            >
              {children}
            </MainWrapper>
            <Spacer top={150} />
            <Footer />
            <Spacer top={150} />
            <Background />
          </>
        )}
      </Wrapper>
    </>
  );
};

const FrontPageBackground = motion(styled.div`
  background-image: url('/assets/roots.webp');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  height: 100vh;
  z-index: -1;
`);

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
