import { useMemo, useRef, useState } from 'react';

import { motion } from 'motion/react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';

import type { ContentfulImage } from 'contentful/types';
import { BREAKPOINTS, BREAKPOINT_NUMBERS } from 'utils/constants';

import Pagination from '../Pagination';

import Picture from './Picture';

type PictureGridProps = {
  data?: ContentfulImage[];
};

const PictureGrid = ({ data = [] }: PictureGridProps) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    // ref points to the wrapper because "Masonry" does not use forwardRef
    <Wrapper
      ref={gridRef}
      initial="closed"
      animate="open"
      variants={{
        open: {
          filter: 'blur(0px)',
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.2,
            staggerChildren: 0.25,
          },
        },
        closed: {
          filter: 'blur(20px)',
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 1,
          },
        },
      }}
    >
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
            <Picture
              key={`${currentPage}-${idx}`}
              title={title}
              description={description}
              file={file}
            />
          );
        })}
      </Masonry>

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

const Wrapper = motion(styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  .masonry-grid {
    display: flex;
    gap: var(--spacing-24);
    width: auto;
  }

  .masonry-grid_column {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-24);
    background-clip: padding-box;
  }

  @media ${BREAKPOINTS.TABLET} {
    .masonry-grid,
    .masonry-grid_column {
      gap: var(--spacing-18);
    }
  }
`);
