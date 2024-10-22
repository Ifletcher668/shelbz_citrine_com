import styled from 'styled-components';

import { BREAKPOINTS } from 'utils/constants';

type Props = {
  align?: 'center' | 'left' | 'right';
  basis?: string;
};

const Column = styled.div<Props>`
  flex: 1;
  /* default to a single column on mobile */
  flex-basis: 100%;

  @media ${BREAKPOINTS.TABLET} {
    flex-basis: 0;
  }
`;
export default Column;
