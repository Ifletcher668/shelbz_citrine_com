import Layout from '../../components/Layout/Layout';
import MainWrapper from '../../components/Layout/MainWrapper';
import Row from '../../components/Layout/Row';
import PictureGrid from '../../components/PictureGrid';
import cervadae from '../../public/assets/art/cervadae.jpg';
import fartsInAJar from '../../public/assets/art/farts-in-a-jar.jpg';
import heart from '../../public/assets/art/heart.jpg';
import henbane from '../../public/assets/art/henbane.jpg';
import noctua from '../../public/assets/art/noctua.jpg';
import portraitOfATear from '../../public/assets/art/portrait-of-a-tear.jpg';
import tigermothGroomingLogo from '../../public/assets/art/tigermoth-grooming-logo.jpg';

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

const ArtPage = () => {
  return (
    <Layout>
      <MainWrapper>
        <Row>
          <h1>My Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad
            qui suscipit commodi porro veritatis, illo similique tempore
            inventore corrupti ullam, veniam ab exercitationem quia officiis,
            iusto architecto. Quae, non!
          </p>
        </Row>

        <PictureGrid data={data} />
      </MainWrapper>
    </Layout>
  );
};

export default ArtPage;
