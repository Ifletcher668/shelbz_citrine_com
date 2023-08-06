import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { MainWrapper, Row } from 'components/Layout';
import Column from 'components/Layout/Column';
import Paragraph from 'components/Paragraph';
import Spacer from 'components/Spacer';
import windowSideViewPicture from 'public/assets/a-window-into-the-imagination.jpg';
import freyjaToArms from 'public/assets/freyja-to-arms.jpg';
import { ROUTES } from 'utils/constants';

import Layout from '../components/Layout/Layout';

const AboutPage = () => (
  <Layout>
    <MainWrapper>
      <h1>About Me</h1>

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

        <Paragraph>
          Prepare to enter the universe of an artist with a penchant for the
          peculiar and extraordinary. My canvas is a blend of classical training
          and self-taught innovation, with an indelible dedication to the dark
          and surreal.
        </Paragraph>

        <Spacer vertical={8} />

        <Paragraph>
          My style is a hybrid of old and new, traditional and futuristic. It
          brings to mind the eerie landscapes of Dungeons and Dragons, the
          otherworldly narratives of video games, and the profound mysteries
          that lie in the darker corners of our psyche. Each piece I craft
          carries the essence of this fusion, teetering on the edge of both the
          known and unfamiliar.
        </Paragraph>

        <Spacer vertical={8} />
        <Paragraph>
          While I have one foot firmly grounded in the contemporary, I pull
          technique from a roster of master oil painters. The sublimity of
          Sandro Botticelli, bold eccentricity of Odd Nerdrum, and captivating
          allure of Alesscio Scholr all find refuge in my work. It's a fusion of
          the artistic audacity of the 17th century and the mind-bending
          meditations of 20th-century surrealism.
        </Paragraph>

        <Spacer vertical={8} />
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
      </div>

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
);

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
  margin-right: var(--spacing-extra-large);
  margin-top: 12px;
`;

export default AboutPage;
