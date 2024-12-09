import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { fetchImageFeed } from 'contentful/helpers';
import type { ContentfulImage } from 'contentful/types';
import goddessPicture from 'public/assets/goddess.jpg';

import Column from '../components/Layout/Column';
import Layout from '../components/Layout/Layout';
import MainWrapper from '../components/Layout/MainWrapper';
import Row from '../components/Layout/Row';
import PictureGrid from '../components/PictureGrid';
import { ROUTES, SEO } from '../utils/constants';

type Props = {
  imageFeed: ContentfulImage[];
};

const Home = (props: Props) => {
  const { imageFeed } = props;

  return (
    <>
      <Head>
        <title>{SEO.homePage.title}</title>
        <meta name="description" content={SEO.homePage.description} />
      </Head>

      <Layout>
        <MainWrapper>
          <h1>Hi, I'm Shelbz</h1>

          <HeroImage
            src={goddessPicture}
            alt={''}
            width={960}
            height={540}
            loading="eager"
          />

          <Row rowSpacing={40}>
            <p>
              an artist combining classical training with self-taught innovation
              to produce dark and surreal works inspired by a medley of
              influences, from the eerie landscapes of Dungeons and Dragons to
              video game narratives.
            </p>

            <Column>
              <p>
                My style bridges the gap between the known and the unfamiliar,
                with a fusion of elements reminiscent of master oil painters
                such as Sandro Botticelli, Odd Nerdrum, and Alessandro Sicioldr.
                Rooted in the audacity of 17th-century art and the mind-bending
                concepts of 20th-century surrealism, my pieces study the
                dichotomy between contrast and harmony.
              </p>
            </Column>
            <Column>
              <p>
                My artistic journey is not just about creating art - it's about
                creating experiences, building connections, and inspiring
                conversations. Whether you're looking for wearable art,
                interested in a local commission, or eager to explore
                international art shows,{' '}
                <Link href={ROUTES.CONTACT}>
                  I would love to hear from you!
                </Link>{' '}
                Let's make art not simply a visual treat, but a meaningful
                encounter that leaves a lasting impact.
              </p>
            </Column>
          </Row>

          <h2 id="feed">My work</h2>

          <PictureGrid data={imageFeed} />
        </MainWrapper>
      </Layout>
    </>
  );
};

const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  object-fit: cover;
  object-position: center;
`;

export async function getStaticProps() {
  const res = await fetchImageFeed();

  if (!res) return;

  // need to assign to a variable to properly 'await'
  const imageFeed = res;

  return {
    props: {
      imageFeed,
    },
  };
}

export default Home;
