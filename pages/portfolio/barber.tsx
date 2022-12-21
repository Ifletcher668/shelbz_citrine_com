import { Layout, MainWrapper, Row } from "../../components";
import barberAtNight from "../../assets/barber-at-night.png";
import PictureGrid from "../../components/PictureGrid";

const pictures = [
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
];

const BarberPage = () => (
  <Layout>
    <MainWrapper>
      <Row>
        <h1>Barber Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui
          suscipit commodi porro veritatis, illo similique tempore inventore
          corrupti ullam, veniam ab exercitationem quia officiis, iusto
          architecto. Quae, non!
        </p>
      </Row>
      <PictureGrid pictures={pictures} />
    </MainWrapper>
  </Layout>
);

export default BarberPage;
