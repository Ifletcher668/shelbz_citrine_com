import { useMemo, useState } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import Pagination from '~components/Pagination/Pagination';

import { fadeIn } from '../../utils/styled-components/snippets';

type PictureGridProps = {
  data: any[];
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
        {displayed.map((picture, idx) => {
          // TODO: Fix images themselves, don't resize them
          const width = picture.width / 4;
          const height = width;

          return (
            <PictureWrapper key={idx}>
              <Picture src={picture.src} alt="" width={width} height={height} />
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
`;

const Picture = styled(Image)`
  width: 100%;
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
