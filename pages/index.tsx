import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Column from 'components/Layout/Column';
import Paragraph from 'components/Paragraph';
import { fetchImageFeed } from 'contentful/helpers';
import type { ContentfulImage } from 'contentful/types';
import goddessPicture from 'public/assets/goddess.jpg';

import Layout from '../components/Layout/Layout';
import MainWrapper from '../components/Layout/MainWrapper';
import Row from '../components/Layout/Row';
import PictureGrid from '../components/PictureGrid';
import { ROUTES } from '../utils/constants';

type Props = {
  imageFeed: ContentfulImage[];
};
const Home = (props: Props) => {
  const { imageFeed } = props;

  return (
    <Layout>
      <MainWrapper>
        <h1>Hi, I'm Shelbz</h1>

        <HeroImage
          src={goddessPicture}
          // omit alt tag to use alt text as caption
          alt={''}
          width={1332}
          height={666}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
        />

        <Row rowSpacing={40}>
          <Paragraph>
            an artist combining classically training with self-taught innovation
            to produce dark and surreal works inspired by a medley of
            influences, from the eerie landscapes of Dungeons and Dragons to
            video game narratives.
          </Paragraph>

          <Column>
            <Paragraph>
              My style bridges the gap between the known and the unfamiliar,
              with a fusion of elements reminiscent of master oil painters such
              as Botticelli, Nerdrum, and Scholr. Rooted in the audacity of
              17th-century art and the mind-bending concepts of 20th-century
              surrealism, my pieces study the dichotomy between contrast and
              harmony.
            </Paragraph>
          </Column>
          <Column>
            <Paragraph>
              My artistic journey is not just about creating art - it's about
              creating experiences, building connections, and inspiring
              conversations. Whether you're looking for wearable art, interested
              in a local commission, or eager to explore international art
              shows,{' '}
              <Link href={ROUTES.CONTACT}>I would love to hear from you!</Link>{' '}
              Let's make art not simply a visual treat, but a meaningful
              encounter that leaves a lasting impact.
            </Paragraph>
          </Column>
        </Row>

        <h2 id="feed">My work</h2>

        <PictureGrid data={imageFeed} />
      </MainWrapper>
    </Layout>
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
