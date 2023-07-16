import Link from 'next/link';

import Column from 'components/Layout/Column';
import Paragraph from 'components/Paragraph';

import Layout from '../components/Layout/Layout';
import MainWrapper from '../components/Layout/MainWrapper';
import Row from '../components/Layout/Row';
import PictureGrid from '../components/PictureGrid';
import cervadae from '../public/assets/art/cervadae.jpg';
import fartsInAJar from '../public/assets/art/farts-in-a-jar.jpg';
import heart from '../public/assets/art/heart.jpg';
import henbane from '../public/assets/art/henbane.jpg';
import noctua from '../public/assets/art/noctua.jpg';
import portraitOfATear from '../public/assets/art/portrait-of-a-tear.jpg';
import tigermothGroomingLogo from '../public/assets/art/tigermoth-grooming-logo.jpg';
import { ROUTES } from '../utils/constants';
import { fetchImageFeed } from 'contentful/helpers';
import { TypeImage, TypeImageFields } from 'generated/types/contentful';

const data = [
  { img: cervadae, caption: 'Placeholder caption, needs to be replaced!' },
  { img: fartsInAJar, caption: 'Placeholder caption, needs to be replaced!' },
  { img: heart, caption: 'Placeholder caption, needs to be replaced!' },
  { img: henbane, caption: 'Placeholder caption, needs to be replaced!' },
  { img: noctua, caption: 'Placeholder caption, needs to be replaced!' },
  {
    img: portraitOfATear,
    caption: 'Placeholder caption, needs to be replaced!',
  },
  {
    img: tigermothGroomingLogo,
    caption: 'Placeholder caption, needs to be replaced!',
  },
];

type Props = {
  imageFeed: TypeImageFields[];
};
const Home = (props: Props) => {
  const { imageFeed } = props;

  // TODO: use
  console.log(imageFeed);

  return (
    <Layout>
      <MainWrapper>
        <h1>Hi, I'm Shelbz</h1>

        <Row rowSpacing={40}>
          {/* BOOKING CALL TO ACTION */}
          <Paragraph>
            an artist combining classic training with self-taught innovation to
            produce dark and surreal works inspired by a medley of influences,
            from the eerie landscapes of Dungeons and Dragons to video game
            narratives.
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

        <PictureGrid data={data} />
      </MainWrapper>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetchImageFeed();
  if (!res) return;

  const imageFeed = await res.map(image => {
    return image.fields;
  });

  return {
    props: {
      imageFeed,
    },
  };
}

export default Home;
