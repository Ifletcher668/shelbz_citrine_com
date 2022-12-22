import styled from 'styled-components';


type RowProps = {
  align?: boolean;
  justify?: boolean;
};

const Row = styled.section<RowProps>`
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;
  ${({ align }) => (align ? 'align-items: center;' : 'align-items: stretch;')};
  ${({ justify }) => (justify ? 'justify-content: center;' : 'justify-content: stretch;')};

  /* TODO: make this a dynamic variable */
  gap: 16px;
`;

export default Row;
