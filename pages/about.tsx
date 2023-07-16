import Link from 'next/link';

import { MainWrapper, Row } from 'components/Layout';
import Column from 'components/Layout/Column';
import Paragraph from 'components/Paragraph';
import Spacer from 'components/Spacer';
import { ROUTES } from 'utils/constants';

import Layout from '../components/Layout/Layout';

const AboutPage = () => (
  <Layout>
    <MainWrapper>
      <h1>About Me</h1>

      <Row rowSpacing={40}>
        <Paragraph>
          Prepare to enter the universe of an artist with a penchant for the
          peculiar and extraordinary. My canvas is a blend of classic training
          and self-taught innovation, with an indelible dedication to the dark
          and surreal.
        </Paragraph>

        <Paragraph>
          My style is a hybrid of old and new, traditional and futuristic. It
          brings to mind the eerie landscapes of Dungeons and Dragons, the
          otherworldly narratives of video games, and the profound mysteries
          that lie in the darker corners of our psyche. Each piece I craft
          carries the essence of this fusion, teetering on the edge of both the
          known and unfamiliar.
        </Paragraph>

        <Paragraph>
          While I have one foot firmly grounded in the contemporary, I pull
          technique from a roster of master oil painters. The sublimity of
          Sandro Botticelli, bold eccentricity of Odd Nerdrum, and captivating
          allure of Alesscio Scholr all find refuge in my work. It's a fusion of
          the artistic audacity of the 17th century and the mind-bending
          meditations of 20th-century surrealism.
        </Paragraph>

        <Paragraph>
          As a classically trained artist who has skillfully woven self-taught
          techniques into my repertoire, I create pieces that are as much a
          study in contrast as they are in harmony. Dark yet enlightening,
          traditional yet revolutionary, my art is a testament to the countless
          dichotomies that define our world.
        </Paragraph>

        <Paragraph>
          So, come, step into my world, and allow yourself to be captivated by
          the bizarre, the beautiful, and everything in between.
        </Paragraph>
      </Row>

      <Spacer top={50} />
      <Row>
        <Column align="center">
          <h2>
            <Link href={ROUTES.FEED}> Want to see my work?</Link>
          </h2>
        </Column>
        <Column align="center">
          <h2>
            <Link href={ROUTES.CONTACT}> Want to buy something?</Link>
          </h2>
        </Column>
      </Row>
    </MainWrapper>
  </Layout>
);

export default AboutPage;
