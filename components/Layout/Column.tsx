import styled from 'styled-components';

type Props = {
  align?: 'center' | 'left' | 'right';
};

const Column = styled.div<Props>`
  flex: 1;
  text-align: ${({ align = 'left' }) => align};
`;
export default Column;
