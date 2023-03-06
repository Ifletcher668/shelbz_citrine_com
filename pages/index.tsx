import Link from 'next/link';
import styled from 'styled-components';

import { Column, Layout, MainWrapper, Row, Spacer } from '~components/index';

import { ROUTES } from '../utils/constants';

// TODO: like Helmet
// import Head from "next/head";

const Home = () => (
  <Layout>
    <MainWrapper>
      <Row>
        <h1>Hi, I'm Tigermoth</h1>
        <ParagraphWithStyledFirstLetter>
          I'm an artist, tattooer, and barber with a penchant for the weird and
          wonderful. I started drawing {new Date().getFullYear() - 1996} years
          ago.
        </ParagraphWithStyledFirstLetter>
      </Row>

      {/* BOOKING CALL TO ACTION */}

      {/* not setting margin values because of this wrapper's "gap" */}
      <Spacer />

      <Row justify>
        <h2>
          Here for a hair appointment?{' '}
          <a href={ROUTES.BOOK} target="_blank" rel="noopener noreferrer">
            Book now!
          </a>{' '}
        </h2>
      </Row>
      {/* not setting margin values because of this wrapper's "gap" */}
      <Spacer />

      <Row>
        <Column>
          <h2>
            <Link href={ROUTES.BARBER_PORTFOLIO}>I'm a Barber</Link>
          </h2>
          <ParagraphWithStyledFirstLetter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad
            qui Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            ad quiLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            ad quiLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            ad quiLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            ad quiLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            ad quiLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            ad quiLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            ad quiLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            ad qui
          </ParagraphWithStyledFirstLetter>
          <div
            style={{
              width: '100%',
              height: '450px',
              background: 'white',
              color: 'black',
            }}
          >
            Image Goes here
          </div>
        </Column>
        <Column>
          <h2>
            <Link href={ROUTES.ART_PORTFOLIO}>and an Artist</Link>
          </h2>
          <ParagraphWithStyledFirstLetter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad
            qui Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            ad qui Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam ad qui Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsam ad qui Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam ad qui Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam ad qui Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ipsam ad qui Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ipsam ad qui Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsam ad qui
          </ParagraphWithStyledFirstLetter>
          <div
            style={{
              width: '100%',
              height: '450px',
              background: 'white',
              color: 'black',
            }}
          >
            Image Goes here
          </div>
        </Column>
      </Row>
    </MainWrapper>
  </Layout>
);

const ParagraphWithStyledFirstLetter = styled.p`
  &::first-letter {
    font-size: 2rem;
    font-weight: 700;
    margin-right: 2px;
    font-family: 'Cinzel Decorative', cursive;
  }
`;

export default Home;
