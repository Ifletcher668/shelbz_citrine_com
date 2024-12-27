import type { AppProps } from 'next/app';

import GlobalStyle from '../utils/styled-components/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
