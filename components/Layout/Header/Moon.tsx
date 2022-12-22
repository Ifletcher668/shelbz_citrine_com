import styled from 'styled-components';

import { BREAKPOINTS } from '~utils/constants';

const Moon = styled.div`
  display: none;

  position: absolute;
  top: 5px;
  right: -30px;
  z-index: 1;

  width: var(--moon-size);
  height: var(--moon-size);
  border-radius: 50%;
  background: var(--accent);
  transition: var(--transition);

  @media ${BREAKPOINTS.LAPTOP} {
    display: revert;
  }
`;

export default Moon;