import type { GetStaticProps } from 'next';
import Head from 'next/head';

import ContactForm from 'components/ContactForm';
import type { NavbarPathProps } from 'utils/getNavbarPathProps';
import { getNavbarPathProps } from 'utils/getNavbarPathProps';

import Accordion from '../components/Accordion';
import { Row } from '../components/Layout';
import Layout from '../components/Layout/Layout';
import MainWrapper from '../components/Layout/MainWrapper';
import { SEO } from '../utils/constants';

type Props = {
  navbarPathProps: NavbarPathProps;
};

const ContactPage = (props: Props) => {
  const { navbarPathProps } = props;
  return (
    <>
      <Head>
        <title>{SEO.contactPage.title}</title>
        <meta name="description" content={SEO.contactPage.description} />
      </Head>

      <Layout navbarData={navbarPathProps}>
        <MainWrapper>
          <h1>Contact</h1>

          <Row rowSpacing={40}>
            <p>
              I pride myself in creating custom pieces that not only meet, but
              surpass your expectations. For commissions, I adhere to a set of
              fundamental goals. Here are my key guidelines:
            </p>

            <Row>
              <Accordion
                summary="Wearable and Usable Art"
                content={[
                  "Art is not merely a passive object to be observed - it's a dynamic expression of human creativity, meant to be lived and interacted with. I aim to weave this philosophy into my work by creating wearable and usable art.",
                  "My creations are not just pleasing to the eye, but also serve a purpose, providing a unique opportunity for art lovers to incorporate artistic expressions into their daily lives. Whether it's a one-of-a-kind hand-painted jacket, a carefully designed accessory, or an art-infused home décor item, each piece resonates with an individualistic charm, turning everyday objects into extraordinary artistic statements.",
                  'Contact me to add a touch of artistic flair to your wardrobe or living space, and experience art in its most interactive form.',
                ]}
              />
            </Row>

            <Row>
              <Accordion
                summary="Local Commissions"
                content={[
                  "Art has the power to tell stories, capture emotions, and create a profound connection with its observer. That's why I offer local commissions, providing a bespoke artistic service tailored to your vision and desires. If you have a particular story to tell, a memory to immortalize, or a vision to transform into a tangible piece of art, I'm here to bring it to life.",
                  "Collaborating with me on a local commission not only supports the thriving local art scene, but also results in a personal piece of artwork that is an authentic reflection of you or your story. Contact me to discuss your ideas, and let's co-create something beautiful and meaningful.",
                ]}
              />
            </Row>

            <Row>
              <Accordion
                summary="World Art Shows"
                content={[
                  "Art is a universal language that transcends borders, bringing people together from all walks of life. My goal is to commune with artists and art enthusiasts around the world by participating in international art shows. These events are an enriching platform for cultural exchange, creative exploration, and collective inspiration. If you're an artist seeking to collaborate, a curator looking for fresh perspectives, or an art enthusiast eager to delve into diverse artistic styles, your invitation to participate in such enriching experiences would be warmly welcomed. Reach out to me, and let's embark on a global artistic journey together.",
                ]}
              />
            </Row>
          </Row>

          <Row justify="flex-end">
            <h2>What are you looking for?</h2>
          </Row>

          <ContactForm />
        </MainWrapper>
      </Layout>
    </>
  );
};

export default ContactPage;

export const getStaticProps: GetStaticProps = async () => {
  const navbarPathProps = await getNavbarPathProps();

  return {
    props: {
      navbarPathProps,
    },
  };
};
