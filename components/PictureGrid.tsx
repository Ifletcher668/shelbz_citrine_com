import { useMemo, useRef, useState } from 'react';

import dynamic from 'next/dynamic';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';

import type { ContentfulImage } from 'contentful/types';
import { BREAKPOINTS, BREAKPOINT_NUMBERS } from 'utils/constants';

import FadeInObserver from './FadeInObserver';
import Modal from './Modal';
import Pagination from './Pagination';

const NextImage = dynamic(() => import('next/image'), { ssr: false });

type PictureGridProps = {
  data: ContentfulImage[];
};

const PictureGrid = ({ data }: PictureGridProps) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImageUrl, setModalImageUrl] = useState<string | null>(null);

  const pageSize = 24;
  const breakpointColumnsObj = {
    default: 3,
    [BREAKPOINT_NUMBERS.LAPTOP]: 3,
    [BREAKPOINT_NUMBERS.TABLET]: 1,
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
    const imageUrl = imageData.fields.file?.url ?? '';
    if (modalImageUrl !== imageUrl) {
      setModalImageUrl(imageUrl);
    }
  };

  const closeModal = () => {
    setModalImageUrl(null);
  };

  return (
    // ref points to the wrapper because "Masonry" does not use forwardRef

    <Wrapper ref={gridRef}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {displayed.map((imageData, idx) => {
          if (!imageData.fields.file) return;
          const { description, file, title } = imageData.fields;

          if (!file.url) return;
          if (!file.details.image) return;

          return (
            <FadeInObserver key={`${currentPage}-${idx}`}>
              <PictureWrapper onClick={() => handleImageClick(imageData)}>
                <Picture
                  src={file.url}
                  alt={title ?? ''}
                  width={250}
                  height={250}
                  loading="lazy"
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6IiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+Cg==
                "
                />

                {description && <PictureCaption>{description}</PictureCaption>}
              </PictureWrapper>
            </FadeInObserver>
          );
        })}
      </Masonry>

      <Modal isOpen={!!modalImageUrl} onClose={closeModal}>
        <>
          {modalImageUrl && (
            <>
              <link rel="preload" href={modalImageUrl || ''} as="image" />

              <Picture
                width={500}
                height={500}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={modalImageUrl || ''}
                alt=""
              />
            </>
          )}
        </>
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

  .masonry-grid {
    display: flex;
    gap: var(--spacing-medium);
    width: auto;
  }

  .masonry-grid_column {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
    background-clip: padding-box;
  }

  @media ${BREAKPOINTS.TABLET} {
    .masonry-grid,
    .masonry-grid_column {
      gap: var(--spacing-small);
    }
  }
`;

const Picture = styled(NextImage)`
  width: 100%;
  height: auto;
  border-radius: 2px;
`;

const PictureCaption = styled.figcaption`
  font-size: var(--font-size-small);
  text-align: center;

  padding: var(--spacing-double-extra-small);

  opacity: 1;

  transition: all 250ms ease-in-out;

  @media ${BREAKPOINTS.TABLET} {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.9);

    margin: auto;
    padding: var(--spacing-small);
  }
`;

const PictureWrapper = styled.article`
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 16px;

  transition: all 250ms ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 500ms ease-in-out;
  }

  @media ${BREAKPOINTS.TABLET} {
    ${PictureCaption} {
      opacity: 0;
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
  }
`;
