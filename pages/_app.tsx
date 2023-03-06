import type { AppProps } from 'next/app';

import ThemeProvider from 'contexts/ThemeContext';

import '../imports.css';
import GlobalStyle from '../utils/styled-components/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
