import styled from 'styled-components';

type RowProps = {
  align?: boolean;
  justify?:
    | boolean
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  rowSpacing?: number;
};

const DEFAULT_SPACING = 16;

const Row = styled.div<RowProps>`
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;
  ${({ align }) => (align ? 'align-items: center;' : 'align-items: stretch;')};
  ${({ justify }) =>
    typeof justify === 'boolean'
      ? 'justify-content: center;'
      : typeof justify === 'string'
      ? `justify-content: ${justify};`
      : 'justify-content: stretch;'};

  /* TODO: make this a dynamic variable */
  gap: ${({ rowSpacing }) => (rowSpacing ? rowSpacing : DEFAULT_SPACING)}px;
`;

export default Row;
