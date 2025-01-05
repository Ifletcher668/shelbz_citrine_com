import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import ContactForm from 'components/ContactForm';
import hardAtWork from 'public/assets/hard-at-work.jpeg';

import Accordion from '../components/Accordion';
import { Row } from '../components/Layout';
import Layout from '../components/Layout/Layout';
import { SEO } from '../utils/constants';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>{SEO.contactPage.title}</title>
        <meta name="description" content={SEO.contactPage.description} />
      </Head>

      <Layout>
        <h1>Contact</h1>

        <Row rowSpacing={40}>
          <div>
            <HardAtWorkImage
              src={hardAtWork}
              // omit alt tag to use alt text as caption
              alt={''}
              width={150}
              height={200}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
            />
            <p>
              I pride myself in creating custom pieces that not only meet, but
              surpass your expectations. For commissions, I adhere to a set of
              fundamental goals. Here are my key guidelines:
            </p>
          </div>

          <Row>
            <Accordion
              summary="Wearable and Usable Art"
              content={[
                "Art is not merely a passive object to be observed - it's a dynamic expression of human creativity, meant to be lived and interacted with. I aim to weave this philosophy into my work by creating wearable and usable art.",
                'Contact me to add a touch of artistic flair to your wardrobe or living space, and experience art in its most interactive form.',
              ]}
            />
          </Row>

          <Row>
            <Accordion
              summary="Commissions"
              content={[
                "Art tells stories, evokes emotions, and creates lasting connections. I offer local commissions to bring your vision to life, whether it's a memory, a story, or an idea. By collaborating with me, you not only support local art but also receive a unique, personal piece that reflects you.",
                "Let's create something meaningful together.",
              ]}
            />
          </Row>
        </Row>

        <ContactForm />
      </Layout>
    </>
  );
};

const BaseImage = styled(Image)`
  border-radius: 2px;
  object-fit: cover;
  object-position: center;
`;

const HardAtWorkImage = styled(BaseImage)`
  float: left;
  margin-right: var(--spacing-24);
  margin-top: 12px;
`;

export default ContactPage;
