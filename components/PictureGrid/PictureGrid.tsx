import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
`;

const PictureCaption = styled.figcaption`
  font-size: 0.8rem;
  text-align: center;
`;

const PictureWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 250ms ease-in-out;

  ${PictureCaption} {
    opacity: 0;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 var(--link-accent);
    ${PictureCaption} {
      opacity: 1;
    }
  }
`;

const Picture = styled(Image)`
  width: 100%;
`;

type PictureGridProps = {
  pictures: any[];
};
const Pictures = ({ pictures }: PictureGridProps) => (
  <>
    {pictures.map((picture) => {
      // TODO: Fix images themselves, don't resize them
      const width = picture.width / 4;
      const height = width;

      return (
        <PictureWrapper key={picture.src}>
          <Picture src={picture.src} alt="" width={width} height={height} />
          <PictureCaption>Working at night</PictureCaption>
        </PictureWrapper>
      );
    })}
  </>
);

const PictureGrid = ({ pictures }: PictureGridProps) => (
  <Wrapper>
    <Pictures pictures={pictures} />
  </Wrapper>
);

export default PictureGrid;
