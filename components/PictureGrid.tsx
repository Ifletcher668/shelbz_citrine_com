import { useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';

import type { ContentfulImage } from 'contentful/types';
import { BREAKPOINT_NUMBERS } from 'utils/constants';

import Modal from './Modal';
import Pagination from './Pagination';

type PictureGridProps = {
  data: ContentfulImage[];
};

const PictureGrid = ({ data }: PictureGridProps) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState<ContentfulImage | null>(null);

  const pageSize = 24;
  const breakpointColumnsObj = {
    default: 3,
    [BREAKPOINT_NUMBERS.LAPTOP]: 3,
    [BREAKPOINT_NUMBERS.TABLET]: 2,
    [BREAKPOINT_NUMBERS.MOBILE]: 1,
  };
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

  const handleImageClick = (imageData: ContentfulImage) => {
    setModalImage(imageData);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    // ref points to the wrapper because "Masonry" does not use forwardRef
    <Wrapper ref={gridRef}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {displayed.map((imageData, idx) => {
          if (!imageData.fields.file) return;
          const { description, file, title } = imageData.fields;

          if (!file.url) return;
          if (!file.details.image) return;

          return (
            <PictureWrapper
              key={`${currentPage}-${idx}`}
              onClick={() => handleImageClick(imageData)}
            >
              <Picture
                src={file.url}
                // omit alt tag to use alt text as caption
                alt={title ?? ''}
                width={file.details.image.width}
                height={file.details.image.height}
                loading="lazy"
                quality={50}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6IiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+Cg==
                "
              />

              {description && <PictureCaption>{description}</PictureCaption>}
            </PictureWrapper>
          );
        })}
      </Masonry>

      <Modal isOpen={!!modalImage} onClose={closeModal}>
        {modalImage && (
          <Picture
            width={modalImage.fields.file?.details.image?.width ?? 0}
            height={modalImage.fields.file?.details.image?.height ?? 0}
            src={modalImage.fields.file?.url ?? ''}
            alt={modalImage.fields.description ?? ''}
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

  .my-masonry-grid {
    display: flex;
    gap: 5px;
    width: auto;
  }

  .my-masonry-grid_column {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    /* change div to the element you're using */
    margin-bottom: 30px;
  }
`;

const Picture = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 2px;
`;

const PictureCaption = styled.figcaption`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  font-size: var(--font-size-small);
  text-align: center;
  padding: var(--spacing-large);
`;

const PictureWrapper = styled.article`
  cursor: pointer;
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
      background-color: rgba(0, 0, 0, 0.8);
    }

    ${PictureCaption} {
      opacity: 1;
    }
  }
`;
