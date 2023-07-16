import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  const meta = {
    title: 'Shelbz Citrine',
    description: 'Shelbz Citrine is a freelance artist.',
    // image: "TODO",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {/* TODO: Add image */}
        {/* <meta property="og:image" content={meta.image} /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
