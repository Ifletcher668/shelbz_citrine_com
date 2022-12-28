import { useMemo, useState } from 'react';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import styled from 'styled-components';

import Pagination from '~components/Pagination/Pagination';

import { Row } from '..';
import { fadeIn } from '../../utils/styled-components/snippets';

type PictureGridProps = {
  data: StaticImageData[];
};

const PictureGrid = ({ data }: PictureGridProps) => {
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const displayed = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return (
    <Wrapper>
      <Grid>
        {displayed.map((image, idx) => {
          return (
            <PictureWrapper key={idx}>
              <Picture
                src={image.src}
                //
                alt=""
                width={image.width}
                height={image.height}
                loading="lazy"
              />
              <PictureCaption>Working at night</PictureCaption>
            </PictureWrapper>
          );
        })}
      </Grid>

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

const Wrapper = styled(Row)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto;
  gap: 16px;
`;

const Picture = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  animation: ${fadeIn} var(--duration) ease-in-out;

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
