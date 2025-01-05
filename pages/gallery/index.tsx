import Head from 'next/head';
import Link from 'next/link';

import FadeInObserver from 'components/FadeInObserver';
import { Layout } from 'components/Layout';
import { ROUTES, SEO, YEAR_STRINGS } from 'utils/constants';

const Home = () => {
  return (
    <>
      <Head>
        <title>{SEO.homePage.title}</title>
        <meta name="description" content={SEO.homePage.description} />
      </Head>

      <Layout>
        <FadeInObserver>
          <h1>Gallery</h1>
        </FadeInObserver>

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
      </Layout>
    </>
  );
};

export default Home;
