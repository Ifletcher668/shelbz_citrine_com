import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import FadeInObserver from 'components/FadeInObserver';
import { Layout } from 'components/Layout';
import PictureGrid from 'components/PictureGrid/PictureGrid';
import { fetchImagesByYear } from 'contentful/helpers';
import type { ContentfulImage } from 'contentful/types';
import { ROUTES, SEO, YEAR_STRINGS } from 'utils/constants';
import Spacer from 'components/Spacer';

type Props = {
  imageFeed: ContentfulImage[];
  year: string;
};

export default function Page(props: Props) {
  const { imageFeed, year } = props;
  const isEmptyYear = imageFeed?.length < 1;

  return (
    <>
      <Head>
        <title>{year}</title>
        <meta name="description" content={SEO.aboutPage.description} />
      </Head>

      {/* Adding key to force page refresh */}
      <Layout key={year}>
        <FadeInObserver>
          <h1>{year}</h1>
        </FadeInObserver>

        {isEmptyYear ? (
          <div>
            <h3>Sorry, I don't have anything for this year, yet!</h3>
            <Spacer top={48} />
            <p>
              Check out another <Link href={ROUTES.GALLERY}>year</Link> to see
              my work. And stop by again to see what I'm up to now!
            </p>
          </div>
        ) : (
          <PictureGrid data={imageFeed} />
        )}
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = YEAR_STRINGS.map(year => ({
    params: { year },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async context => {
  const res = await fetchImagesByYear(context.params?.year as string);

  if (!res) return { props: { navbarPathProps: {} } };

  const imageFeed = res;

  return {
    props: {
      year: context.params?.year,
      imageFeed,
    },
  };
};
