import { Layout, MainWrapper, Row } from '~components/index';
import PictureGrid from '~components/PictureGrid';

import barberMirror from '~public/assets/hair/barber-mirror.jpg';
import blowdry from '~public/assets/hair/blowdry.jpg';
import curlyMullet from '~public/assets/hair/curly-mullet.jpg';
import inAFieldOfFlowers from '~public/assets/hair/in-a-field-of-flowers.jpg';
import peace from '~public/assets/hair/peace.webp';
import pixieMullet from '~public/assets/hair/pixie-mullet.jpg';
import playingGuitar from '~public/assets/hair/playing-guitar.webp';
import shag from '~public/assets/hair/shag.jpg';
import shelbzBarberProfile from '~public/assets/hair/shelbz-barber-profile.jpg';
import skinFade from '~public/assets/hair/skin-fade.jpg';
import smilingAtWork from '~public/assets/hair/smiling-at-work.jpg';
import sploosh from '~public/assets/hair/sploosh.jpg';
import straightRazorCloseup from '~public/assets/hair/straight-razor-closeup.jpg';
import straightRazorSideShot from '~public/assets/hair/straight-razor-side-shot.jpg';
import texturedBangs from '~public/assets/hair/textured-bangs.jpg';
import texturedPixieCut from '~public/assets/hair/textured-pixie-cut.jpg';
import valkyrie from '~public/assets/hair/valkyrie.jpg';

const pictures = [
  barberMirror,
  blowdry,
  curlyMullet,
  inAFieldOfFlowers,
  peace,
  pixieMullet,
  playingGuitar,
  shag,
  shelbzBarberProfile,
  skinFade,
  smilingAtWork,
  sploosh,
  straightRazorCloseup,
  straightRazorSideShot,
  texturedBangs,
  texturedPixieCut,
  valkyrie,
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

      <PictureGrid data={pictures} />
    </MainWrapper>
  </Layout>
);

export default BarberPage;
