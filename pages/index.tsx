import Link from "next/link";
import styled from "styled-components";
import { Column, Layout, MainWrapper, Row } from "../components";
// TODO: like Helmet
// import Head from "next/head";

const Home = () => (
  <Layout>
    <MainWrapper>
      <Row>
        <h1>Hi, I'm Shelbz</h1>
        <ParagraphWithStyledFirstLetter>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui
          suscipit commodi porro veritatis, illo similique tempore inventore
          corrupti ullam, veniam ab exercitationem quia officiis, iusto
          architecto. Quae, non! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsam ad qui suscipit commodi porro veritatis, illo
          similique tempore inventore corrupti ullam, veniam ab exercitationem
          quia officiis, iusto architecto. Quae, non!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsam ad qui suscipit commodi porro
          veritatis, illo similique tempore inventore corrupti ullam, veniam ab
          exercitationem quia officiis, iusto architecto. Quae, non!
        </ParagraphWithStyledFirstLetter>
      </Row>

      <Row>
        <Column>
          <Link href={"/book"}>
            <h2>I'm a Barber:</h2>
          </Link>
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
              width: "450px",
              height: "450px",
              background: "white",
              color: "black",
            }}
          >
            Image Goes here
          </div>
        </Column>
        <Column>
          <Link href={"/portfolio"}>
            <h2>and an Artist</h2>
          </Link>
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
              width: "450px",
              height: "450px",
              background: "white",
              color: "black",
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
    font-family: "Cinzel Decorative", cursive;
  }
`;

export default Home;
