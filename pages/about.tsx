import { motion } from 'motion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Paragraph from 'components/Paragraph';
// import TextWithImageRow from 'components/TextWithImageRow';
// import windowSideViewPicture from 'public/assets/a-window-into-the-imagination.webp';
import forestPrincess from 'public/assets/forest-princess.jpg';
import freyjaToArms from 'public/assets/freyja-to-arms.webp';
import inTheWoods from 'public/assets/in-the-woods.jpg';
import { childVariants } from 'utils/animationConstants';
import { ROUTES, SEO } from 'utils/constants';

import Spacer from '../components/Spacer';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>{SEO.aboutPage.title}</title>
        <meta name="description" content={SEO.aboutPage.description} />
      </Head>

      <motion.h1 variants={childVariants}>About Me</motion.h1>

      <div>
        <FreyjaToArmsImage
          variants={childVariants}
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
          I believe that art teases out the subconscious experiences otherwise
          inaccessible to us, and yet they are integral to human life. My work
          combines classical training with rigorous experimentation and an
          indelible dedication to the surreal, the dark, and the unexplored.
        </Paragraph>

        <Spacer top={16} bottom={16} />

        <Paragraph>
          Ranging from the early renaissance works of Sandro Botticelli to the
          eccentric works of Odd Nerdrum or Alessandro Sicioldr, my work
          explores contrasts—dark yet enlightening, traditional yet
          provocative—capturing the many dichotomies that shape our beautiful
          world.
        </Paragraph>

        {/* <Spacer top={32} bottom={32} />
          <hr />
          <Spacer top={32} bottom={32} /> */}

        {/* Find the right pictures */}
        {/* <TextWithImageRow
            image={windowSideViewPicture}
            text="Artwork for musicians, honed by the unique soundscapes they create"
            imageSide="left"
          />

          <TextWithImageRow
            image={windowSideViewPicture}
            text="Portraits, re-imaginations, and visions in decadent detail"
            imageSide="right"
          />

          <TextWithImageRow
            image={windowSideViewPicture}
            text="Charcoal, realism, and chaos entwined with the beauty of reason"
            imageSide="left"
          /> */}
      </div>

      <motion.hr variants={childVariants} />

      <Spacer top={16} bottom={16} />

      <div>
        <ForestPrincessImage
          variants={childVariants}
          src={forestPrincess}
          // omit alt tag to use alt text as caption
          alt={''}
          width={200}
          height={250}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
        />

        <Paragraph alignment="right">
          Art is not just to be viewed—it's to be experienced, much like music
          is more than being heard. I create functional and wearable art that
          blends beauty with purpose. From album artwork concepts and band merch
          to hand-painted jackets, each piece transforms everyday objects into
          personal, artistic statements.
        </Paragraph>
      </div>

      <motion.hr variants={childVariants} />

      <Paragraph alignment="center">
        Both art and music fuel this world with joy, with something meaningful,
        transcendent, surreal. I am honored to work with bands to make their
        artistic vision come alive. I regularly update my{' '}
        <Link href={ROUTES.GALLERY}>gallery</Link> with new pieces to check out.
        If you would like to discuss a custom piece or to purchase prints to
        existing work, let's <Link href={ROUTES.CONTACT}>get in touch</Link>.
      </Paragraph>

      <InTheWoodsImage
        variants={childVariants}
        src={inTheWoods}
        // omit alt tag to use alt text as caption
        alt={''}
        width={333}
        height={333}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
      />
    </>
  );
};

// Styled Components
const BaseImage = styled(Image)`
  border-radius: 2px;
  object-fit: cover;
  object-position: center;
`;
const StyledFreyjaToArmsImage = styled(BaseImage)`
  float: left;
  margin-right: var(--spacing-24);
  margin-top: 12px;
`;
const StyledForestPrincessImage = styled(BaseImage)`
  float: right;
  margin-left: var(--spacing-24);
`;
const StyledInTheWoodsImage = styled(BaseImage)`
  align-self: center;
`;

// Motion Components
const FreyjaToArmsImage = motion.create(StyledFreyjaToArmsImage);
const ForestPrincessImage = motion.create(StyledForestPrincessImage);
const InTheWoodsImage = motion.create(StyledInTheWoodsImage);

export default AboutPage;
