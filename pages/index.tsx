import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import FadeInObserver from 'components/FadeInObserver';
import { Layout } from 'components/Layout';
import type { ContentfulImage } from 'contentful/types';
import goddessPicture from 'public/assets/goddess.webp';

import Column from '../components/Layout/Column';
import MainWrapper from '../components/Layout/MainWrapper';
import Row from '../components/Layout/Row';
import { ROUTES, SEO } from '../utils/constants';
import type { NavbarPathProps } from '../utils/getNavbarPathProps';
import { getNavbarPathProps } from '../utils/getNavbarPathProps';

type Props = {
  imageFeed: ContentfulImage[];
  navbarPathProps: NavbarPathProps;
};

const Home = (props: Props) => {
  const { navbarPathProps } = props;

  return (
    <>
      <Head>
        <title>{SEO.homePage.title}</title>
        <meta name="description" content={SEO.homePage.description} />
      </Head>

      <Layout navbarData={navbarPathProps}>
        <MainWrapper>
          <FadeInObserver>
            <h1>Hi, I'm Shelbz</h1>
          </FadeInObserver>

          <FadeInObserver>
            <HeroImage
              src={goddessPicture}
              alt={''}
              width={960}
              height={540}
              loading="eager"
            />
          </FadeInObserver>

          <Row rowSpacing={40}>
            <FadeInObserver>
              <p>
                an artist combining classical training with self-taught
                innovation to produce dark and surreal works inspired by a
                medley of influences, from the eerie landscapes of Dungeons and
                Dragons to video game narratives.
              </p>
            </FadeInObserver>
            <FadeInObserver>
              <Column>
                <p>
                  My style bridges the gap between the known and the unfamiliar,
                  with a fusion of elements reminiscent of master oil painters
                  such as Sandro Botticelli, Odd Nerdrum, and Alessandro
                  Sicioldr. Rooted in the audacity of 17th-century art and the
                  mind-bending concepts of 20th-century surrealism, my pieces
                  study the dichotomy between contrast and harmony.
                </p>
              </Column>
            </FadeInObserver>
            <FadeInObserver>
              <Column>
                <p>
                  My artistic journey is not just about creating art - it's
                  about creating experiences, building connections, and
                  inspiring conversations. Whether you're looking for wearable
                  art, interested in a local commission, or eager to explore
                  international art shows,{' '}
                  <Link href={ROUTES.CONTACT}>
                    I would love to hear from you!
                  </Link>{' '}
                  Let's make art not simply a visual treat, but a meaningful
                  encounter that leaves a lasting impact.
                </p>
              </Column>
            </FadeInObserver>
          </Row>
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

export const getStaticProps: GetStaticProps = async () => {
  const navbarPathProps = await getNavbarPathProps();

  return {
    props: {
      navbarPathProps,
    },
  };
};

export default Home;
