import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import FadeInObserver from 'components/FadeInObserver';
import windowSideViewPicture from 'public/assets/a-window-into-the-imagination.webp';
import freyjaToArms from 'public/assets/freyja-to-arms.webp';
import { ROUTES, SEO } from 'utils/constants';
import type { NavbarPathProps } from 'utils/getNavbarPathProps';
import { getNavbarPathProps } from 'utils/getNavbarPathProps';

import { Layout, MainWrapper, Row } from '../components/Layout';
import Column from '../components/Layout/Column';
import Spacer from '../components/Spacer';

type Props = {
  navbarPathProps: NavbarPathProps;
};

const AboutPage = (props: Props) => {
  const { navbarPathProps } = props;

  return (
    <>
      <Head>
        <title>{SEO.aboutPage.title}</title>
        <meta name="description" content={SEO.aboutPage.description} />
      </Head>

      <Layout navbarData={navbarPathProps}>
        <MainWrapper>
          <FadeInObserver>
            <h1>About Me</h1>
          </FadeInObserver>

          <div>
            <FreyjaToArmsImage
              src={freyjaToArms}
              // omit alt tag to use alt text as caption
              alt={''}
              width={200}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
            />
            <FadeInObserver>
              <p>
                Prepare to enter the universe of an artist with a penchant for
                the peculiar and extraordinary. My canvas is a blend of
                classical training and self-taught innovation, with an indelible
                dedication to the dark and surreal.
              </p>
            </FadeInObserver>

            <Spacer top={8} bottom={8} />

            <FadeInObserver>
              <p>
                My style is a hybrid of old and new, traditional and futuristic.
                It brings to mind the eerie landscapes of Dungeons and Dragons,
                the otherworldly narratives of video games, and the profound
                mysteries that lie in the darker corners of our psyche. Each
                piece I craft carries the essence of this fusion, teetering on
                the edge of both the known and unfamiliar.
              </p>
            </FadeInObserver>

            <Spacer top={8} bottom={8} />
            <FadeInObserver>
              <p>
                While I have one foot firmly grounded in the contemporary, I
                pull technique from a roster of master oil painters. The
                sublimity of Sandro Botticelli, bold eccentricity of Odd
                Nerdrum, and captivating allure of Alesscio Scholr all find
                refuge in my work. It's a fusion of the artistic audacity of the
                17th century and the mind-bending meditations of 20th-century
                surrealism.
              </p>
            </FadeInObserver>

            <Spacer top={8} bottom={8} />
            <FadeInObserver>
              <p>
                As a classically trained artist who has skillfully woven
                self-taught techniques into my repertoire, I create pieces that
                are as much a study in contrast as they are in harmony. Dark yet
                enlightening, traditional yet revolutionary, my art is a
                testament to the countless dichotomies that define our world.
              </p>
            </FadeInObserver>
            <Spacer top={8} bottom={8} />
            <FadeInObserver>
              <p>
                So, come, step into my world, and allow yourself to be
                captivated by the bizarre, the beautiful, and everything in
                between.
              </p>
            </FadeInObserver>
          </div>

          <Row>
            <FadeInObserver>
              <Column>
                <h2>
                  <Link href={ROUTES.FEED}> Want to see my work?</Link>
                </h2>
              </Column>
            </FadeInObserver>
            <FadeInObserver>
              <Column>
                <h2>
                  <Link href={ROUTES.CONTACT}> Want to buy something?</Link>
                </h2>
              </Column>
            </FadeInObserver>
          </Row>

          <WindowSideViewImage
            src={windowSideViewPicture}
            // omit alt tag to use alt text as caption
            alt={''}
            width={1332}
            height={666}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
          />
        </MainWrapper>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const navbarPathProps = await getNavbarPathProps();

  return {
    props: {
      navbarPathProps,
    },
  };
};

const BaseImage = styled(Image)`
  border-radius: 2px;
  object-fit: cover;
  object-position: center;
`;

const WindowSideViewImage = styled(BaseImage)`
  width: 100%;
  height: 100%;
`;

const FreyjaToArmsImage = styled(BaseImage)`
  float: left;
  margin-right: var(--spacing-24);
  margin-top: 12px;
`;

export default AboutPage;
