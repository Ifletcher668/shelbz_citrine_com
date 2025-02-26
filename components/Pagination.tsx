import type { CSSProperties } from 'react';

import styled from 'styled-components';

import { usePagination } from '../utils/hooks';
import { DOTS } from '../utils/hooks/usePagination/usePagination';

import Icon from './Icon';
import UnstyledButton from './UnstyledButton';
import VisuallyHidden from './VisuallyHidden';

type Props = {
  onPageChange: (pageNumber: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
};

const Pagination = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (!paginationRange) return <></>;

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  // TODO: lastPage used for styling
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalCount / pageSize;

  return (
    <Wrapper>
      <li>
        <UnstyledButton onClick={onPrevious} disabled={isFirstPage}>
          <VisuallyHidden>
            {isFirstPage ? 'You are on the first page' : 'Previous page'}
          </VisuallyHidden>
          <Icon id="chevron-left" />
        </UnstyledButton>
      </li>
      {paginationRange.map((pageNumber, idx) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <PaginationControl key={idx}>&#8230;</PaginationControl>;
        }

        const styles = {
          '--current-page-background-color':
            pageNumber === currentPage
              ? 'var(--font-secondary-accent)'
              : 'var(--background)',
          '--current-page-color':
            pageNumber === currentPage
              ? 'var(--background)'
              : 'var(--font-secondary-accent)',
        } as CSSProperties;

        // Render Page Pills
        return (
          <PaginationControl
            style={styles}
            key={idx}
            onClick={() => {
              // pageNumber is a string when it's a DOT
              if (typeof pageNumber === 'string') return;

              onPageChange(pageNumber);
            }}
          >
            {pageNumber}
          </PaginationControl>
        );
      })}
      <li>
        {' '}
        <UnstyledButton onClick={onNext} disabled={isLastPage}>
          <VisuallyHidden>
            {isLastPage ? 'You are on the last page' : 'Next page'}
          </VisuallyHidden>
          <Icon id="chevron-right" />
        </UnstyledButton>
      </li>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: clamp(8px, 2vw, 16px);
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PaginationControl = styled.li`
  flex: 1;

  /* height * line-height */
  max-width: calc(1.5rem * 1.5);

  color: var(--current-page-color);
  background-color: var(--current-page-background-color);
  border-radius: 4px;

  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  user-select: none;
`;
