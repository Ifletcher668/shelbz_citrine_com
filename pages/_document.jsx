import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { SEO } from '../utils/constants';

const MyDocument = ({ styles }) => (
  <Html lang="en-us">
    <Head>
      {styles}
      <meta name="robots" content="index, follow" />

      <meta name="title" content={SEO.base.title} />
      <meta name="description" content={SEO.base.description} />

      <meta property="og:title" content={SEO.base.title} />
      <meta
        property="og:description"
        content={SEO.base.openGraph.description}
      />
      <meta property="og:image" content={SEO.base.openGraph.image} />
      <meta property="og:type" content="website" />

      <meta rel="icon" href="favicon.jpg" />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async ctx => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
