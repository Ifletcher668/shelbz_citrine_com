import type { GetStaticProps } from 'next';
import Head from 'next/head';

import FadeInObserver from 'components/FadeInObserver';
import { Layout, MainWrapper } from 'components/Layout';
import PictureGrid from 'components/PictureGrid';
import { fetchImagesByYear } from 'contentful/helpers';
import type { ContentfulImage } from 'contentful/types';
import { SEO, YEAR_STRINGS } from 'utils/constants';
import { getNavbarPathProps, NavbarPathProps } from 'utils/getNavbarPathProps';

type Props = {
  imageFeed: ContentfulImage[];
  navbarPathProps: NavbarPathProps;
  year: string;
};

export default function Page(props: Props) {
  const { navbarPathProps, imageFeed, year } = props;

  return (
    <>
      <Head>
        <title>{year}</title>
        <meta name="description" content={SEO.aboutPage.description} />
      </Head>

      <Layout navbarData={navbarPathProps}>
        <MainWrapper>
          <FadeInObserver>
            <h1>{year}</h1>
          </FadeInObserver>

          <PictureGrid data={imageFeed} />
        </MainWrapper>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [];

  const navbarPathProps = await getNavbarPathProps();
  const yearStrings = YEAR_STRINGS.map(year => {
    return { params: { year, navbarPathProps } };
  });

  paths.push(...yearStrings);

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async context => {
  const res = await fetchImagesByYear(context.params?.year as string);
  const navbarPathProps = await getNavbarPathProps();

  if (!res) return { props: { navbarPathProps: {} } };

  // need to assign to a variable to properly 'await'
  const imageFeed = res;

  return {
    props: {
      year: context.params?.year,
      navbarPathProps,
      imageFeed,
    },
  };
};
