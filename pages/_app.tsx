import { AnimatePresence, motion } from 'motion/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Layout } from 'components/Layout';
import Header from 'components/Layout/Header';
import StarryCanvas from 'components/StarryCanvas';
import HeaderProvider from 'contexts/HeaderContext';
import { pageVariants } from 'utils/animationConstants';
import { ROUTES } from 'utils/constants';
import { fadeIn } from 'utils/styled-components/snippets';

import GlobalStyle from '../utils/styled-components/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isHomePage = router.asPath === ROUTES.HOME;
  const isCanvasPage = router.asPath === ROUTES.CANVAS;
  const { year } = router.query;
  const pageKey =
    router.pathname === `${ROUTES.GALLERY}/[year]` && year
      ? `${router.pathname}-${year}`
      : router.pathname;

  if (isCanvasPage) {
    return (
      <>
        <GlobalStyle />
        <PageTransition key={`${pageKey}-canvas`}>
          <StarryCanvas />
        </PageTransition>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <GlobalStyle />

      <PageTransition key={`${pageKey}-canvas`}>
        <StarryCanvas />
      </PageTransition>

      <HeaderProvider>
        <Header />
      </HeaderProvider>

      {/* Do not use Layout to ensure smooth transitions to/from home page */}
      {isHomePage ? (
        <Component {...pageProps} />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={pageKey}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

const PageTransition = styled.div`
  animation: ${fadeIn} 4s ease-in;
`;
