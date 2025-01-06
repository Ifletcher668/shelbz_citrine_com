import Head from 'next/head';
import Link from 'next/link';

import { ROUTES, SEO, YEAR_STRINGS } from 'utils/constants';

const Gallery = () => {
  return (
    <>
      <Head>
        <title>{SEO.galleryPage.title}</title>
        <meta name="description" content={SEO.galleryPage.description} />
      </Head>

      <h1>Gallery</h1>

      {YEAR_STRINGS.filter(year => {
        const currentYear = new Date().getFullYear().toString();
        return year <= currentYear;
      })
        .reverse()
        .map(year => {
          return (
            <h2 key={year}>
              <Link href={`${ROUTES.GALLERY}/${year}`}>{year}</Link>
            </h2>
          );
        })}
    </>
  );
};

export default Gallery;
