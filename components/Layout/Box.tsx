import styled from 'styled-components';

const Box = styled.div<{ direction?: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
`;

export default Box;
