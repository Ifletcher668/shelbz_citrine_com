import type { AppProps } from 'next/app';
import styled from 'styled-components';

import Header from 'components/Layout/Header';
import StarryCanvas from 'components/StarryCanvas';
import HeaderProvider from 'contexts/HeaderContext';
import { fadeIn } from 'utils/styled-components/snippets';

import GlobalStyle from '../utils/styled-components/GlobalStyles';

const PageTransition = styled.div`
  animation: ${fadeIn} 3s ease-in;
`;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <PageTransition>
        <StarryCanvas />
      </PageTransition>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Component {...pageProps} />
    </>
  );
}
