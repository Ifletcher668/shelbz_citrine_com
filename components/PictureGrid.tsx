import { useMemo, useRef, useState } from 'react';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import styled from 'styled-components';

import Modal from './Modal';
import Pagination from './Pagination';

type Image = {
  img: StaticImageData;
  caption?: string;
};
type PictureGridProps = {
  data: Image[];
};

const PictureGrid = ({ data }: PictureGridProps) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  const displayed = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, pageSize]);

  // scroll to top of grid when page changes
  const paginate = (pageNumber: number) => {
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setCurrentPage(pageNumber);
  };

  const handleImageClick = (imageData: Image) => {
    setModalImage(imageData);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <Wrapper>
      <Grid ref={gridRef}>
        {displayed.map((imageData, idx) => (
          <PictureWrapper
            key={`${currentPage}-${idx}`}
            onClick={() => handleImageClick(imageData)}
          >
            <Picture
              src={imageData.img.src}
              // omit alt tag to use alt text as caption
              alt=""
              width={imageData.img.width}
              height={imageData.img.height}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
            />

            <PictureCaption>{imageData.caption}</PictureCaption>
          </PictureWrapper>
        ))}
      </Grid>

      <Modal isOpen={!!modalImage} onClose={closeModal}>
        {modalImage && (
          <Picture
            width={modalImage.img.width}
            height={modalImage.img.width}
            src={modalImage.img.src}
            alt={modalImage.caption ?? ''}
          />
        )}
      </Modal>

      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={paginate}
      />
    </Wrapper>
  );
};

export default PictureGrid;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

const Grid = styled.div`
  --gap: 8px;
  --row-height: 450px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--gap);
`;

const Picture = styled(Image)`
  width: 100%;
  height: 100%;
  max-height: var(--row-height);
  border-radius: 2px;
  object-fit: cover;
  object-position: center;
`;

const PictureCaption = styled.figcaption`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  font-size: 0.8rem;
  text-align: center;
`;

const PictureWrapper = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 16px;

  ${PictureCaption} {
    opacity: 0;
  }

  transition: all 250ms ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 250ms ease-in-out;
  }

  &:hover {
    /* gray transparent background over the image*/
    &::before {
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${PictureCaption} {
      opacity: 1;
    }
  }
`;
