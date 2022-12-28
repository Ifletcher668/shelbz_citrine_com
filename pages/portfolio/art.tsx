import barberAtNight from '../../assets/barber-at-night.png';
import coloring from '../../assets/coloring.png';
import { Layout, MainWrapper, Row } from '../../components';
import PictureGrid from '../../components/PictureGrid';

const data = [
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  coloring,
  coloring,
  coloring,
  coloring,
  coloring,
  coloring,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  coloring,
  coloring,
  coloring,
  coloring,
  coloring,
  coloring,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  coloring,
  coloring,
  coloring,
  coloring,
  coloring,
  coloring,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  coloring,
  coloring,
  coloring,
  coloring,
  coloring,
  coloring,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  barberAtNight,
  coloring,
  coloring,
  coloring,
  coloring,
  coloring,
  coloring,
];

const BarberPage = () => {
  return (
    <Layout>
      <MainWrapper>
        <Row>
          <h1>Art Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad
            qui suscipit commodi porro veritatis, illo similique tempore
            inventore corrupti ullam, veniam ab exercitationem quia officiis,
            iusto architecto. Quae, non!
          </p>
        </Row>

        <Row justify>
          <PictureGrid data={data} />
        </Row>
      </MainWrapper>
    </Layout>
  );
};

export default BarberPage;
