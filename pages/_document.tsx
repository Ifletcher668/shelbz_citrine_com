import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  const meta = {
    title: 'Shelbz Citrine',
    description:
      "Shelbz Citrine blends modernity and heritage, weaves the magic of traditional painting styles into a digital age tableau, infused into a tapestry that speaks to the contemporary mind. Her work stands as a bridge, connecting the timeless mastery of the 17th century with the innovative surrealism of the 20th, crafting an aesthetic that resonates with the contemporary connoisseur's diverse interests.",
    ogDescription:
      "Experience the mesmerizing blend of classic and modern in Shelbz Citrine's art. Her work bridges the timeless mastery of traditional painting styles with innovative surrealism, crafting an aesthetic that speaks volumes to today's diverse art enthusiasts.",
    image: '/assets/goddess.jpg',
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:title" content={meta.title} />
        {/* TODO: Add image */}
        <meta property="og:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
